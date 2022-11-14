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
     * @return mixed[][]
     */
    public function getListIB(): array;

    /**
     * Возвращает список сущностей
     *
     * @return mixed[][]
     */
    public function getListHL(): array;
}
