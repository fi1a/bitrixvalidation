<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

/**
 * Объект определяющий выборку полей сущности
 */
class EntitySelector implements EntitySelectorInterface
{
    /**
     * @var bool
     */
    private $selectFields;

    /**
     * @var bool
     */
    private $selectGroups;

    /**
     * Конструктор
     */
    public function __construct(bool $selectFields = false, bool $selectGroups = false)
    {
        $this->selectFields = $selectFields;
        $this->selectGroups = $selectGroups;
    }

    /**
     * @inheritDoc
     */
    public function isSelectFields(): bool
    {
        return $this->selectFields;
    }

    /**
     * @inheritDoc
     */
    public function isSelectGroups(): bool
    {
        return $this->selectGroups;
    }
}
