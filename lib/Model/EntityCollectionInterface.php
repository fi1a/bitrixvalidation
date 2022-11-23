<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model;

use Fi1a\Collection\ICollection;

/**
 * Коллекция сущностей
 */
interface EntityCollectionInterface extends ICollection
{
    /**
     * Возвращает массив
     *
     * @return mixed[][]
     */
    public function toArray(): array;
}
