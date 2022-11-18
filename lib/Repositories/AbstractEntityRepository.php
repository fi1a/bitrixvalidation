<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\Field;
use Fi1a\BitrixValidation\Domain\FieldCollectionInterface;
use Fi1a\BitrixValidation\Domain\FieldInterface;
use Fi1a\BitrixValidation\Domain\Group;
use Fi1a\BitrixValidation\Domain\GroupCollection;
use Fi1a\BitrixValidation\Domain\GroupCollectionInterface;
use Fi1a\BitrixValidation\Domain\GroupInterface;
use Fi1a\BitrixValidation\Domain\RuleCollection;
use Fi1a\BitrixValidation\Domain\RuleInterface;

/**
 * Абстрактный класс репозитория сущности
 */
abstract class AbstractEntityRepository implements EntityRepositoryInterface
{
    /**
     * @inheritDoc
     */
    public function getEntity(int $id, ?EntitySelectInterface $select = null): EntityInterface
    {
        $collection = $this->getList(['filter' => ['=ID' => $id],], $select);

        if (!count($collection)) {
            throw new ErrorException(sprintf('Сущность с id="%d" не найдена', $id));
        }

        return $collection[0];
    }

    /**
     * Фабричный метод для поля
     *
     * @param mixed[] $field
     */
    protected function factoryField(array $field): FieldInterface
    {
        return new Field($field);
    }

    /**
     * Возвращает группы
     *
     * @param mixed[][] $fields
     */
    protected function getGroups(
        string $entityType,
        int $entityId,
        FieldCollectionInterface $fields
    ): GroupCollectionInterface {
        $collection = new GroupCollection();

        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => $entityType,
                '=ENTITY_ID' => $entityId,
            ],
        ]);
        foreach ($rules as $rule) {
            assert($rule instanceof RuleInterface);
            if (!$collection->has($rule->getFieldId())) {
                foreach ($fields as $field) {
                    assert($field instanceof FieldInterface);
                    if ($field->id === $rule->getFieldId()) {
                        $collection[$field->id] = $this->factoryGroup($field->toArray());
                        $collection[$field->id]['rules'] = new RuleCollection();
                    }
                }
            }
            if (!$collection->has($rule->getFieldId())) {
                continue;
            }
            $collection[$rule->getFieldId()]['rules'][] = $rule;
        }

        $collection->resetKeys();

        return $collection;
    }

    /**
     * Фабричный метод группы правил
     *
     * @param mixed[] $field
     */
    protected function factoryGroup(array $field): GroupInterface
    {
        return new Group($field);
    }
}
