<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Fi1a\Collection\CollectionInterface;

/**
 * Коллекция правил
 */
interface RuleCollectionInterface extends CollectionInterface
{
    /**
     * Преобразование в массив
     *
     * @return mixed[][]
     */
    public function toArray(): array;
}
