<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model\Rules;

use Fi1a\Collection\DataType\ValueObject;
use InvalidArgumentException;

/**
 * Абстрактный класс правил
 */
abstract class AbstractRule extends ValueObject implements RuleInterface
{
    /**
     * @var string[]
     */
    protected $modelKeys = [
        'key', 'options', 'sort', 'id', 'field_id', 'entity_type', 'entity_id', 'multiple', 'message',
    ];

    /**
     * @inheritDoc
     */
    public function setId(?int $id): void
    {
        $this->modelSet('id', $id);
    }

    /**
     * @inheritDoc
     */
    public function setKey(string $key): void
    {
        if (!$key) {
            throw new InvalidArgumentException('key не может быть пустым');
        }

        $this->modelSet('key', $key);
    }

    /**
     * @inheritDoc
     */
    public function setSort(int $sort): void
    {
        if ($sort < 0) {
            throw new InvalidArgumentException('sort не может быть пустым');
        }

        $this->modelSet('sort', $sort);
    }

    /**
     * @inheritDoc
     */
    public function setFieldId(string $fieldId): void
    {
        if (!$fieldId) {
            throw new InvalidArgumentException('field_id не может быть пустым');
        }

        $this->modelSet('field_id', $fieldId);
    }

    /**
     * @inheritDoc
     */
    public function setEntityType(string $entityType): void
    {
        if (!$entityType) {
            throw new InvalidArgumentException('entity_type не может быть пустым');
        }

        $this->modelSet('entity_type', $entityType);
    }

    /**
     * @inheritDoc
     */
    public function setEntityId(int $entityId): void
    {
        if (!$entityId) {
            throw new InvalidArgumentException('entity_id не может быть пустым');
        }

        $this->modelSet('entity_id', $entityId);
    }

    /**
     * @inheritDoc
     */
    public function setMultiple(bool $multiple): void
    {
        $this->modelSet('multiple', $multiple);
    }

    /**
     * @inheritDoc
     */
    public function setMessage(?string $message): void
    {
        $this->modelSet('message', $message);
    }

    /**
     * @inheritDoc
     */
    public function toArrayUpperCase(): array
    {
        $array = [];
        foreach ($this->toArray() as $key => $value) {
            $array[mb_strtoupper($key)] = $value;
        }

        return $array;
    }
}
