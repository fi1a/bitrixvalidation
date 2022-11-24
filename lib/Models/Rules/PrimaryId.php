<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

/**
 * Идентификатор
 */
class PrimaryId implements PrimaryIdInterface
{
    /**
     * @var int|null
     */
    private $id;

    /**
     * @inheritDoc
     */
    public function __construct(?int $id = null)
    {
        $this->id = $id;
    }

    /**
     * @inheritDoc
     */
    public function isNew(): bool
    {
        return is_null($this->id);
    }

    /**
     * @inheritDoc
     */
    public function getValue(): ?int
    {
        return $this->id;
    }
}
