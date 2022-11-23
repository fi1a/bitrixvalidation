<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model\Rules;

/**
 * Идентификатор
 */
interface PrimaryIdInterface
{
    /**
     * Конструктор
     */
    public function __construct(?int $id);

    /**
     * Новая запись
     */
    public function isNew(): bool;

    /**
     * Возвращает значние идентификатора
     */
    public function getValue(): ?int;
}
