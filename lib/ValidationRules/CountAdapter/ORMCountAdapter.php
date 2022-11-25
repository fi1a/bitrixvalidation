<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ValidationRules\CountAdapter;

/**
 * ORM адаптер
 */
class ORMCountAdapter implements CountAdapterInterface
{
    /**
     * @var \Bitrix\Main\ORM\Data\DataManager
     */
    private $className;

    /**
     * @inheritDoc
     */
    public function __construct(string $className)
    {
        $this->className = $className;
    }

    /**
     * @inheritDoc
     */
    public function getCount(array $filter): int
    {
        return $this->className::getCount($filter);
    }
}
