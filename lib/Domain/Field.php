<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\DataType\ValueObject;
use InvalidArgumentException;

/**
 * Поле
 */
class Field extends ValueObject implements FieldInterface
{
    /**
     * @var string[]
     */
    protected $modelKeys = [
        'id', 'name', 'type', 'internal_type', 'multiple',
    ];

    /**
     * Установить ИД поля
     *
     * @param string|int $id
     */
    public function setId($id): void
    {
        if (!$id) {
            throw new InvalidArgumentException('id не может быть пустым');
        }

        $this->modelSet('id', $id);
    }

    /**
     * Установить название поля
     */
    public function setName(string $name): void
    {
        if (!$name) {
            throw new InvalidArgumentException('name не может быть пустым');
        }

        $this->modelSet('name', $name);
    }

    /**
     * Тип поля
     */
    public function setType(string $type): void
    {
        if (!$type) {
            throw new InvalidArgumentException('type не может быть пустым');
        }
        if (!in_array($type, ['string', 'number', 'date'])) {
            throw new InvalidArgumentException('Неизвестный тип поля');
        }

        $this->modelSet('type', $type);
    }

    /**
     * Внутренний тип поля
     */
    public function setInternalType(string $internalType): void
    {
        if (!$internalType) {
            throw new InvalidArgumentException('internalType не может быть пустым');
        }
        if (!in_array($internalType, ['field', 'property'])) {
            throw new InvalidArgumentException('Неизвестный внутренний тип поля');
        }

        $this->modelSet('internal_type', $internalType);
    }

    /**
     * Множественное поле или нет
     */
    public function setMultiple(bool $multiple): void
    {
        $this->modelSet('multiple', $multiple);
    }
}
