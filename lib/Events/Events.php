<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Events;

use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Entity\Event;
use Bitrix\Main\Entity\EventResult;
use Bitrix\Main\Entity\FieldError;
use Bitrix\Main\EventManager;
use Bitrix\Main\Loader;
use CIBlockProperty;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\BitrixValidation\Models\Rules\RuleInterface;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Validation\AllOf;
use Fi1a\Validation\ChainInterface;
use Fi1a\Validation\ErrorInterface;
use Fi1a\Validation\Validator;

/**
 * События инфоблоков
 */
class Events
{
    /**
     * @var mixed[]
     */
    private static $properties = [];

    /**
     * Событие удаления свойства инфоблока
     *
     * @param mixed[] $property
     */
    public static function onAfterIBlockPropertyDelete(array $property): void
    {
        $service = new EntityService();
        $service->deleteFieldRules('ib', (int) $property['IBLOCK_ID'], $property['ID']);
    }

    /**
     * Событие до обновления свойства инфоблока
     *
     * @param mixed[] $property
     */
    public static function onBeforeIBlockPropertyUpdate(array $property): bool
    {
        static::$properties[$property['ID']] = CIBlockProperty::GetByID($property['ID'])->Fetch();

        return true;
    }

    /**
     * Событие после обновления свойства инфоблока
     *
     * @param mixed[] $property
     */
    public static function onAfterIBlockPropertyUpdate(array $property): void
    {
        if (static::$properties[$property['ID']] === false) {
            return;
        }
        if (
            isset($property['MULTIPLE'])
            && $property['MULTIPLE'] === 'N'
            && static::$properties[$property['ID']]['MULTIPLE'] === 'Y'
        ) {
            $service = new EntityService();
            $service->deleteFieldMultipleRules(
                'ib',
                (int) static::$properties[$property['ID']]['IBLOCK_ID'],
                $property['ID']
            );
        }
        if (
            isset($property['PROPERTY_TYPE'])
            && $property['PROPERTY_TYPE'] !== static::$properties[$property['ID']]['PROPERTY_TYPE']
        ) {
            $service = new EntityService();
            $service->deleteFieldRules(
                'ib',
                (int) static::$properties[$property['ID']]['IBLOCK_ID'],
                $property['ID']
            );
        }
    }

    /**
     * Событие после удаления пользовательского поля
     *
     * @param mixed[] $field
     * @param string|int $id
     */
    public static function onAfterUserTypeDelete(array $field, $id): void
    {
        $matches = [];
        if (preg_match('/^HLBLOCK_([0-9]+)$/mui', $field['ENTITY_ID'], $matches) <= 0) {
            return;
        }
        $id = (int) $matches[1];
        if (!$id) {
            return;
        }
        $service = new EntityService();
        $service->deleteFieldRules('hl', $id, $field['ID']);
    }

    /**
     * Событие после удаления инфоблока
     *
     * @param int|string $id
     */
    public static function onAfterIBlockDelete($id): void
    {
        $service = new EntityService();
        $service->deleteEntityRules('ib', (int) $id);
    }

    /**
     * Событие после удаления инфоблока
     *
     * @param mixed[] $fields
     */
    public static function highloadblockOnDelete(array $fields): void
    {
        $service = new EntityService();
        $service->deleteEntityRules('hl', (int) $fields['ID']);
    }

    /**
     * Событие до сохранения элемента инфоблока
     *
     * @param mixed[] $fields
     */
    public static function onBeforeIBlockElementAddAndUpdate(array $fields): bool
    {
        $values = [];
        $rules = [];
        $titles = [];
        $messages = [];
        $propertyByIds = [];
        $id = isset($fields['ID']) ? (int) $fields['ID'] : null;

        $service = new EntityService();
        $entity = $service->getEntity('ib', (int) $fields['IBLOCK_ID']);

        if (count($entity->getGroups())) {
            $iterator = CIBlockProperty::GetList([], [
                '=IBLOCK_ID' => (int) $fields['IBLOCK_ID'],
                '=CODE' => array_keys($fields['PROPERTY_VALUES']),
            ]);
            $propertyByIds = $fields['PROPERTY_VALUES'];
            while ($property = $iterator->Fetch()) {
                foreach ($fields['PROPERTY_VALUES'] as $propertyCode => $value) {
                    if ($propertyCode === $property['CODE']) {
                        $propertyByIds[(int) $property['ID']] = $value;
                    }
                }
            }
        }

        foreach ($entity->getGroups() as $group) {
            assert($group instanceof GroupInterface);

            $titles = self::getTitles($group, $titles);
            $chain = self::getChain($entity, $group, $id);
            $messages = array_merge($messages, self::getMessages($group));

            if ($group->getMultiple()) {
                $rules[$group->getId()] = self::getMultipleChain($entity, $group, $id);
                $rules[$group->getId() . ':*'] = $chain;
            } else {
                $rules[$group->getId()] = $chain;
            }

            if ($group->getInternalType() === 'property') {
                foreach ($propertyByIds as $propertyId => $property) {
                    if ((int) $propertyId === (int) $group->getId()) {
                        if ($group->getMultiple()) {
                            $values[$group->getId()] = [];
                        }
                        if (!is_array($property)) {
                            $property = [$property];
                        }
                        foreach ($property as $value) {
                            if ($group->getMultiple()) {
                                if (
                                    (
                                        is_array($value)
                                        && array_key_exists('VALUE', $value)
                                        && !$value['VALUE']
                                    )
                                    || !$value
                                ) {
                                    continue;
                                }
                                $values[$group->getId()][] = is_array($value)
                                && array_key_exists('VALUE', $value)
                                    ? $value['VALUE']
                                    : $value;

                                continue;
                            }

                            $values[$group->getId()] = is_array($value)
                            && array_key_exists('VALUE', $value)
                                ? $value['VALUE']
                                : $value;
                        }
                    }
                }

                continue;
            }

            if (isset($fields[$group->getId()])) {
                $values[$group->getId()] = $fields[$group->getId()];
            }
        }

        if (!count($rules)) {
            return true;
        }

        $validator = new Validator();

        $validation = $validator->make($values, $rules, $messages, $titles);
        $result = $validation->validate();

        if (!$result->isSuccess()) {
            ModuleRegistry::getApplication()->ThrowException($result->getErrors()->join("\n"));
        }

        return $result->isSuccess();
    }

    /**
     * Событие до сохранения элемента highloadblock'a
     */
    public static function onBeforeHighloadBlockAddAndUpdate(Event $event): EventResult
    {
        $hlEntity = $event->getEntity();
        $fields = $event->getParameter('fields');
        $fieldByIds = [];
        $mapFields = [];
        $result = new EventResult();
        $id = $event->getParameter('id')['ID'] ? (int) $event->getParameter('id')['ID'] : null;

        $hl = HighloadBlockTable::getList([
            'filter' => [
                '=NAME' => $hlEntity->getName(),
            ],
            'limit' => 1,
        ])->fetch();

        $values = [];
        $rules = [];
        $titles = [];
        $messages = [];

        $service = new EntityService();
        $entity = $service->getEntity('hl', (int) $hl['ID']);

        if (count($entity->getGroups())) {
            $iterator = CUserTypeEntity::GetList([], [
                'ENTITY_ID' => 'HLBLOCK_' . $hl['ID'],
            ]);
            while ($item = $iterator->Fetch()) {
                foreach ($fields as $fieldName => $value) {
                    if ($item['FIELD_NAME'] === $fieldName) {
                        $fieldByIds[(int) $item['ID']] = $value;
                        $mapFields[(int) $item['ID']] = $item['FIELD_NAME'];
                    }
                }
            }
        }

        foreach ($entity->getGroups() as $group) {
            assert($group instanceof GroupInterface);

            $titles = self::getTitles($group, $titles);
            $chain = self::getChain($entity, $group, $id);
            $messages = array_merge($messages, self::getMessages($group));

            if ($group->getMultiple()) {
                $rules[$group->getId()] = self::getMultipleChain($entity, $group, $id);
                $rules[$group->getId() . ':*'] = $chain;
            } else {
                $rules[$group->getId()] = $chain;
            }

            foreach ($fieldByIds as $fieldId => $fieldValue) {
                if ((int) $fieldId !== (int) $group->getId()) {
                    continue;
                }
                if ($group->getMultiple()) {
                    $values[$group->getId()] = [];
                    foreach ($fieldValue as $value) {
                        if (!$value) {
                            continue;
                        }
                        $values[$group->getId()][] = $value;
                    }

                    continue;
                }

                $values[$group->getId()] = $fieldValue;
            }
        }

        if (!count($rules)) {
            return $result;
        }

        $validator = new Validator();

        $validation = $validator->make($values, $rules, $messages, $titles);
        $resultValidation = $validation->validate();

        if (!$resultValidation->isSuccess()) {
            foreach ($resultValidation->getErrors() as $error) {
                assert($error instanceof ErrorInterface);
                $result->addError(new FieldError(
                    $hlEntity->getField($mapFields[(int) $error->getFieldName()]),
                    $error->getMessage()
                ));
            }
        }

        return $result;
    }

    /**
     * Вызывается в выполняемой части пролога сайта. Регистрируем события для highloadblock'ов
     */
    public static function onBeforeProlog(): void
    {
        Loader::includeModule('fi1a.bitrixvalidation');
        Loader::includeModule('highloadblock');

        $iterator = HighloadBlockTable::getList();

        $eventManager = EventManager::getInstance();

        while ($hl = $iterator->fetch()) {
            $eventManager->addEventHandler(
                '',
                $hl['NAME'] . 'OnBeforeAdd',
                [self::class, 'onBeforeHighloadBlockAddAndUpdate']
            );
            $eventManager->addEventHandler(
                '',
                $hl['NAME'] . 'OnBeforeUpdate',
                [self::class, 'onBeforeHighloadBlockAddAndUpdate']
            );
        }
    }

    /**
     * Возвращает заголовки
     *
     * @param string[] $titles
     *
     * @return string[]
     */
    private static function getTitles(GroupInterface $group, array $titles): array
    {
        $titles[$group->getId()] = $group->getTitle();
        if ($group->getMultiple()) {
            $titles[$group->getId() . ':*'] = $group->getTitle();
        }

        return $titles;
    }

    /**
     * Возвращает цепочку правил
     *
     * @param string|int|null $id
     */
    private static function getChain(EntityInterface $entity, GroupInterface $group, $id): ChainInterface
    {
        $chain = AllOf::create();
        foreach ($group->getRules() as $rule) {
            assert($rule instanceof RuleInterface);
            $rule->configure($chain, $entity, $group, $id);
        }

        return $chain;
    }

    /**
     * Возвращает сообщения об ошибках
     *
     * @return string[]
     */
    private static function getMessages(GroupInterface $group): array
    {
        $messages = [];
        foreach ($group->getRules() as $rule) {
            if ($rule->getMessage()) {
                $messages[$group->getId() . '|' . $rule->getKey()] = $rule->getMessage();
            }
        }

        return $messages;
    }

    /**
     * Возвращает цепочку правил для множественного значения
     *
     * @param string|int|null $id
     */
    private static function getMultipleChain(EntityInterface $entity, GroupInterface $group, $id): ChainInterface
    {
        $multipleChain = AllOf::create()->array();
        foreach ($group->getMultipleRules() as $rule) {
            assert($rule instanceof RuleInterface);
            $rule->configure($multipleChain, $entity, $group, $id);
        }

        return $multipleChain;
    }
}
