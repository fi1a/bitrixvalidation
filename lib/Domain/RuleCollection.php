<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

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
}
