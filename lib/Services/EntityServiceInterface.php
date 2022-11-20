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

    /**
     * Сохранение правил
     *
     * @param string[][] $rules
     */
    public function saveEntityRules(string $entityType, int $entityId, array $rules): bool;

    /**
     * Возвращает правила
     *
     * @return mixed[][]
     */
    public function getRules(): array;

    /**
     * Удаляет правила для поля
     *
     * @param int|string $fieldId
     */
    public function deleteFieldRules(string $entityType, int $entityId, $fieldId): bool;

    /**
     * Удаляет правила для множественного значения поля
     *
     * @param int|string $fieldId
     */
    public function deleteFieldMultipleRules(string $entityType, int $entityId, $fieldId): bool;

    /**
     * Удаляет правила для сущности
     */
    public function deleteEntityRules(string $entityType, int $entityId): bool;
}
