<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rules;

use Fi1a\Collection\Collection;

/**
 * Коллекция правил
 */
class RuleCollection extends Collection implements RuleCollectionInterface
{
    /**
     * @inheritDoc
     */
    public function __construct(?array $data = null)
    {
        parent::__construct(RuleInterface::class, $data);
    }

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = [];
        foreach ($this->getArrayCopy() as $rule) {
            assert($rule instanceof RuleInterface);
            $array[] = $rule->toArray();
        }

        return $array;
    }
}
