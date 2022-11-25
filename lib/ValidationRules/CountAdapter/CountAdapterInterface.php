<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ValidationRules\CountAdapter;

/**
 * Адаптер ORM для подсчета кол-ва
 */
interface CountAdapterInterface
{
    /**
     * Возвращает кол-во элементов по фильтру
     *
     * @param mixed[] $filter
     */
    public function getCount(array $filter): int;
}
