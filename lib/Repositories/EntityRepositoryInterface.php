<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;

/**
 *  Репозиторий сущностей
 */
interface EntityRepositoryInterface
{
    /**
     * Возвращает список сущностей инфоблоков
     *
     * @param mixed[][] $parameters
     */
    public function getListIB(array $parameters = []): EntityCollectionInterface;

    /**
     * Возвращает список сущностей Highload-блоков
     *
     * @param mixed[][] $parameters
     */
    public function getListHL(array $parameters = []): EntityCollectionInterface;
}
