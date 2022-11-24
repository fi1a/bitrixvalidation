<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models;

use Fi1a\Collection\Collection;

/**
 * Коллекция полей
 */
class FieldCollection extends Collection implements FieldCollectionInterface
{
    /**
     * @inheritDoc
     */
    public function __construct(?array $data = null)
    {
        parent::__construct(Field::class, $data);
    }

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = [];
        foreach ($this->getArrayCopy() as $field) {
            assert($field instanceof FieldInterface);
            $array[] = $field->toArray();
        }

        return $array;
    }
}
