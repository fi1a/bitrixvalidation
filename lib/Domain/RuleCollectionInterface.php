<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\ICollection;

/**
 * Коллекция правил
 */
interface RuleCollectionInterface extends ICollection
{
    /**
     * Преобразование в массив
     *
     * @return mixed[][]
     */
    public function toArray(): array;
}
