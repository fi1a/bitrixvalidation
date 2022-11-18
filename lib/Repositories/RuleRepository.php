<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Main\Web\Json;
use Fi1a\BitrixValidation\Domain\MaxRule;
use Fi1a\BitrixValidation\Domain\MinRule;
use Fi1a\BitrixValidation\Domain\RuleCollection;
use Fi1a\BitrixValidation\Domain\RuleCollectionInterface;
use Fi1a\BitrixValidation\Domain\RuleInterface;
use Fi1a\BitrixValidation\ORM\RuleTable;
use InvalidArgumentException;

/**
 *  Репозиторий правил
 */
class RuleRepository implements RuleRepositoryInterface
{
    /**
     * @inheritDoc
     */
    public function getList(array $parameters = []): RuleCollectionInterface
    {
        $parameters['select'] = ['*'];
        if (!isset($parameters['order'])) {
            $parameters['order'] = ['SORT' => 'asc'];
        }

        $iterator = RuleTable::getList($parameters);
        $rules = [];
        while ($entity = $iterator->fetchObject()) {
            $rules[] = [
                'id' => $entity['ID'],
                'key' => $entity['KEY'],
                'options' => $entity['OPTIONS'] ? Json::decode($entity['OPTIONS']) : [],
                'sort' => $entity['SORT'],
                'field_id' => $entity['FIELD_ID'],
                'entity_type' => $entity['ENTITY_TYPE'],
                'entity_id' => $entity['ENTITY_ID'],
            ];
        }

        return $this->factoryList($rules);
    }

    /**
     * @inheritDoc
     */
    public function factoryList(array $rules): RuleCollectionInterface
    {
        $collection = new RuleCollection();

        foreach ($rules as $rule) {
            $collection[] = $this->factory($rule);
        }

        return $collection;
    }

    /**
     * @inheritDoc
     */
    public function factory(array $rule): RuleInterface
    {
        if (isset($rule['id']) && $rule['id']) {
            $rule['id'] = (int) $rule['id'];
        }
        if (isset($rule['sort'])) {
            $rule['sort'] = (int) $rule['sort'];
        }
        if (isset($rule['entity_id'])) {
            $rule['entity_id'] = (int) $rule['entity_id'];
        }

        switch ($rule['key']) {
            case 'min':
                return new MinRule($rule);
            case 'max':
                return new MaxRule($rule);
        }

        throw new InvalidArgumentException(
            htmlspecialcharsbx(sprintf('Неизвестное правило "%s"', $rule['key']))
        );
    }

    /**
     * @inheritDoc
     */
    public function save(string $entityType, int $entityId, RuleCollectionInterface $rules): bool
    {
        if (!$entityType) {
            throw new InvalidArgumentException('Аргумент $entityType не может быть пустым');
        }
        if (!$entityId) {
            throw new InvalidArgumentException('Аргумент $entityId не может быть пустым');
        }

        $collection = $this->getList([
            'filter' => [
                '=ENTITY_TYPE' => $entityType,
                '=ENTITY_ID' => $entityId,
            ],
        ]);

        foreach ($rules as $rule) {
            assert($rule instanceof RuleInterface);
            if ($rule->getId()) {
                foreach ($collection as $index => $collectionRule) {
                    assert($collectionRule instanceof RuleInterface);
                    if ($collectionRule->getId() === $rule->getId()) {
                        unset($collection[$index]);
                    }
                }
            }

            $fields = [];
            foreach ($rule->toArrayUpperCase() as $key => $value) {
                if ($key === 'ID') {
                    continue;
                }
                if ($key === 'OPTIONS') {
                    $value = Json::encode($value);
                }
                $fields[$key] = $value;
            }

            $result = $rule->getId()
                ? RuleTable::update($rule->getId(), $fields)
                : RuleTable::add($fields);

            if (!$result->isSuccess()) {
                throw new InvalidArgumentException(implode('; ', $result->getErrorMessages()));
            }
        }
        foreach ($collection as $collectionRule) {
            assert($collectionRule instanceof RuleInterface);
            $result = RuleTable::delete($collectionRule->getId());
            if (!$result->isSuccess()) {
                throw new InvalidArgumentException(implode('; ', $result->getErrorMessages()));
            }
        }

        return true;
    }
}
