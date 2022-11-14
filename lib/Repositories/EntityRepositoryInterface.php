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
     */
    public function getListIB(): EntityCollectionInterface;

    /**
     * Возвращает список сущностей Highload-блоков
     */
    public function getListHL(): EntityCollectionInterface;
}
