<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\BetweenLengthRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на максимальную и минимальную длину строки
 */
class BetweenLengthRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string'], BetweenLengthRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(BetweenLengthRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(BetweenLengthRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new BetweenLengthRule([
            'key' => 'betweenLength',
            'options' => [
                'min' => 10,
                'max' => 20,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['min' => 10, 'max' => 20,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmptyMin(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenLengthRule([
            'key' => 'betweenLength',
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
        new BetweenLengthRule([
            'key' => 'betweenLength',
            'options' => [
                'min' => 10,
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
        new BetweenLengthRule([
            'key' => 'betweenLength',
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
        new BetweenLengthRule([
            'key' => 'betweenLength',
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
    public function testOptionsExceptionNotInteger(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenLengthRule([
            'key' => 'betweenLength',
            'options' => [
                'max' => 10.5,
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
        new BetweenLengthRule([
            'key' => 'betweenLength',
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
        $rule = new BetweenLengthRule([
            'key' => 'betweenLength',
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
        $this->assertTrue($chain->validate('12')->isSuccess());
        $this->assertFalse($chain->validate('123')->isSuccess());
    }
}
