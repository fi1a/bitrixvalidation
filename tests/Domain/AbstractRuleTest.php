<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\MinRule;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use InvalidArgumentException;

/**
 * Проверка на минимальное значение
 */
class AbstractRuleTest extends ModuleTestCase
{
    /**
     * Преобразование в массив
     */
    public function testToArray(): void
    {
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $this->assertEquals($fields, $rule->toArray());
    }

    /**
     * Ключ правила
     */
    public function testSetKey(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $rule->setKey('');
    }

    /**
     * Сортировка
     */
    public function testSetSort(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $rule->setSort(-1);
    }

    /**
     * Идентификатор поля
     */
    public function testSetFieldId(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $rule->setFieldId('');
    }

    /**
     * Тип сущности
     */
    public function testSetEntityType(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $rule->setEntityType('');
    }

    /**
     * Идентификатор сущности
     */
    public function testSetEntityId(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $fields = [
            'key' => 'min',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $rule->setEntityId(0);
    }

    /**
     * Массив с ключами в верхнем регистре
     */
    public function testToArrayUpperCase(): void
    {
        $fields = [
            'key' => 'min',
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
        ];
        $rule = new MinRule($fields);
        $this->assertEquals([
            'KEY' => 'min',
            'OPTIONS' => [],
            'SORT' => 500,
            'ID' => 1,
            'FIELD_ID' => '1',
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => 1,
        ], $rule->toArrayUpperCase());
    }
}
