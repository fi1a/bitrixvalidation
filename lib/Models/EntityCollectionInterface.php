<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models;

use Fi1a\Collection\CollectionInterface;

/**
 * Коллекция сущностей
 */
interface EntityCollectionInterface extends CollectionInterface
{
    /**
     * Возвращает массив
     *
     * @return mixed[][]
     */
    public function toArray(): array;
}
