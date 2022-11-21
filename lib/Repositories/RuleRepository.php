<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Main\Web\Json;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollection;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\Domain\Rules\RuleInterface;
use Fi1a\BitrixValidation\Domain\Rules\RuleRegistry;
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
                'multiple' => (int) $entity['MULTIPLE'] === 1,
                'message' => $entity['MESSAGE'],
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
        if (isset($rule['multiple']) && is_string($rule['multiple'])) {
            $rule['multiple'] = $rule['multiple'] === 'true';
        }

        $class = RuleRegistry::get($rule['key']);

        return new $class($rule);
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
        $this->delete($collection);

        return true;
    }

    /**
     * @inheritDoc
     */
    public function delete(RuleCollectionInterface $rules): bool
    {
        foreach ($rules as $rule) {
            assert($rule instanceof RuleInterface);
            $result = RuleTable::delete($rule->getId());
            if (!$result->isSuccess()) {
                throw new InvalidArgumentException(implode('; ', $result->getErrorMessages()));
            }
        }

        return true;
    }
}
