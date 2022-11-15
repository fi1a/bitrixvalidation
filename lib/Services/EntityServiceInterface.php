<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Services;

/**
 * Интерфейс сервиса сущностей
 */
interface EntityServiceInterface
{
    /**
     * Возвращает список сущностей
     *
     * @param mixed[][] $parameters
     *
     * @return mixed[][]
     */
    public function getListIB(array $parameters = []): array;

    /**
     * Возвращает список сущностей
     *
     * @param mixed[][] $parameters
     *
     * @return mixed[][]
     */
    public function getListHL(array $parameters = []): array;
}
