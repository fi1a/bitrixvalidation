<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;

/**
 *  Репозиторий сущностей
 */
interface EntityRepositoryInterface
{
    /**
     * Возвращает список сущностей
     *
     * @param mixed[][] $parameters
     */
    public function getList(array $parameters = []): EntityCollectionInterface;

    /**
     * Возвращает сущность
     */
    public function getEntity(int $id): EntityInterface;
}
