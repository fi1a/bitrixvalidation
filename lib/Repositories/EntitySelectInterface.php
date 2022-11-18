<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

/**
 * Объект определяющий выборку полей сущности
 */
interface EntitySelectInterface
{
    /**
     * Выбирать поля или нет
     */
    public function isSelectFields(): bool;

    /**
     * Выбирать правила или нет
     */
    public function isSelectGroups(): bool;
}
