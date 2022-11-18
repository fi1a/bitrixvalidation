<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\Collection;

/**
 * Коллекция групп правил
 */
class GroupCollection extends Collection implements GroupCollectionInterface
{
    /**
     * @inheritDoc
     */
    public function __construct(?array $data = null)
    {
        parent::__construct(Group::class, $data);
    }

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = [];
        foreach ($this->getArrayCopy() as $group) {
            assert($group instanceof GroupInterface);
            $array[] = $group->toArray();
        }

        return $array;
    }
}
