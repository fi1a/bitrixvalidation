<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model;

use Fi1a\Collection\Collection;

/**
 * Коллекция
 */
class EntityCollection extends Collection implements EntityCollectionInterface
{
    /**
     * @inheritDoc
     */
    public function __construct(?array $data = null)
    {
        parent::__construct(EntityInterface::class, $data);
    }

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = [];
        foreach ($this->getArrayCopy() as $entity) {
            assert($entity instanceof Entity);
            $array[] = $entity->getArrayCopy();
        }

        return $array;
    }
}
