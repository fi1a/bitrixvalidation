<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Model\Rules;

use Fi1a\BitrixValidation\Model\Rules\BetweenRule;
use Fi1a\BitrixValidation\Model\Rules\PrimaryId;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на максимальное и мимальное значение
 */
class BetweenRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['number'], BetweenRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(BetweenRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(BetweenRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 1,
                'max' => 2,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['min' => 1, 'max' => 2,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmptyMin(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenRule([
            'key' => 'between',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmptyMax(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 1,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionNotNumericMin(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 'foo',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionNotNumericMax(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 10,
                'max' => 'foo',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionGreaterAndLess(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 10,
                'max' => 5,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Конфигурирует правило для валидации
     */
    public function testConfigure(): void
    {
        $rule = new BetweenRule([
            'key' => 'between',
            'options' => [
                'min' => 1,
                'max' => 2,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain);
        $this->assertTrue($chain->validate(1)->isSuccess());
        $this->assertFalse($chain->validate(3)->isSuccess());
    }
}
