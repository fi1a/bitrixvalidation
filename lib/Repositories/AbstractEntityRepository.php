<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityInterface;

/**
 * Абстрактный класс репозитория сущности
 */
abstract class AbstractEntityRepository implements EntityRepositoryInterface
{
    /**
     * @inheritDoc
     */
    public function getEntity(int $id): EntityInterface
    {
        $collection = $this->getList(['filter' => ['=ID' => $id],]);

        if (!count($collection)) {
            throw new ErrorException(sprintf('Сущность с id="%d" не найдена', $id));
        }

        return $collection[0];
    }
}
