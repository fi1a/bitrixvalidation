<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Events;

use CIBlockProperty;
use Fi1a\BitrixValidation\Services\EntityService;

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
        if ($property['MULTIPLE'] === 'Y') {
            return true;
        }
        $prevProperty = CIBlockProperty::GetByID($property['ID'])->Fetch();
        static::$properties[$property['ID']] = $prevProperty;

        return true;
    }

    /**
     * Событие после обновления свойства инфоблока
     *
     * @param mixed[] $property
     */
    public static function onAfterIBlockPropertyUpdate(array $property): void
    {
        if (
            !isset(static::$properties[$property['ID']])
            || static::$properties[$property['ID']]['MULTIPLE'] === 'N'
        ) {
            return;
        }
        $service = new EntityService();
        $service->deleteFieldMultipleRules(
            'ib',
            (int) static::$properties[$property['ID']]['IBLOCK_ID'],
            $property['ID']
        );
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
}
