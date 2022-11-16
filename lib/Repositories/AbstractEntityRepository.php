<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\Field;
use Fi1a\BitrixValidation\Domain\FieldInterface;

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
}
