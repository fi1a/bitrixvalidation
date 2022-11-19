<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

use Fi1a\Collection\DataType\IValueObject;

/**
 * Правило
 *
 * @method int getId()
 * @method string getKey()
 * @method int getSort()
 * @method string getFieldId()
 * @method string getEntityType()
 * @method int getEntityId()
 * @method bool getMultiple()
 */
interface RuleInterface extends IValueObject
{
    /**
     * ИД
     */
    public function setId(?int $id): void;

    /**
     * Ключ правила
     */
    public function setKey(string $key): void;

    /**
     * Сортировка
     */
    public function setSort(int $sort): void;

    /**
     * Идентификатор поля
     */
    public function setFieldId(string $fieldId): void;

    /**
     * Тип сущности
     */
    public function setEntityType(string $entityType): void;

    /**
     * Идентификатор сущности
     */
    public function setEntityId(int $entityId): void;

    /**
     * Правило для множественного значения
     */
    public function setMultiple(bool $multiple): void;

    /**
     * Возвращает опции
     *
     * @return mixed[]
     */
    public function getOptions(): array;

    /**
     * Массив с ключами в верхнем регистре
     *
     * @return mixed[]
     */
    public function toArrayUpperCase(): array;

    /**
     * Возвращает типы полей для которых доступно правило
     *
     * @return string[]
     */
    public static function getTypes(): array;

    /**
     * Возвращает заголовок
     */
    public static function getTitle(): string;
}