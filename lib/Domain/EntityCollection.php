<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\Collection;

/**
 * Коллекция
 */
class EntityCollection extends Collection implements EntityCollectionInterface
{
    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = [];
        foreach ($this->getArrayCopy() as $entity) {
            assert($entity instanceof IBEntity);
            $array[] = $entity->getArrayCopy();
        }

        return $array;
    }
}
