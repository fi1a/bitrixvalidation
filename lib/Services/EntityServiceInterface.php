<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Services;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;

/**
 * Интерфейс сервиса сущностей
 */
interface EntityServiceInterface
{
    /**
     * Возвращает список сущностей
     *
     * @param mixed[][] $parameters
     */
    public function getListIB(array $parameters = []): EntityCollectionInterface;

    /**
     * Возвращает список сущностей
     *
     * @param mixed[][] $parameters
     */
    public function getListHL(array $parameters = []): EntityCollectionInterface;

    /**
     * Возвращает сущность
     */
    public function getEntity(string $type, int $id): EntityInterface;
}
