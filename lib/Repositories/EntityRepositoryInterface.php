<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Models\EntityCollectionInterface;
use Fi1a\BitrixValidation\Models\EntityInterface;

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
    public function getList(array $parameters = [], ?EntitySelectorInterface $select = null): EntityCollectionInterface;

    /**
     * Возвращает сущность
     */
    public function getEntity(int $id, ?EntitySelectorInterface $select = null): EntityInterface;
}
