<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

/**
 * Объект определяющий выборку полей сущности
 */
class EntitySelect implements EntitySelectInterface
{
    /**
     * @var bool
     */
    private $selectFields;

    public function __construct(bool $selectFields = false)
    {
        $this->selectFields = $selectFields;
    }

    /**
     * @inheritDoc
     */
    public function isSelectFields(): bool
    {
        return $this->selectFields;
    }
}
