<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Model\Rules;

use Fi1a\BitrixValidation\Model\Rules\MaxCountRule;
use Fi1a\BitrixValidation\Model\Rules\PrimaryId;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на максимальное количество значений в массиве
 */
class MaxCountRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['multiple'], MaxCountRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(MaxCountRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(MaxCountRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new MaxCountRule([
            'key' => 'maxCount',
            'options' => [
                'max' => 10,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);
        $this->assertEquals(['max' => 10,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmpty(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MaxCountRule([
            'key' => 'maxCount',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionNotNumeric(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MaxCountRule([
            'key' => 'maxCount',
            'options' => [
                'max' => 'foo',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionNotInteger(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MaxCountRule([
            'key' => 'maxCount',
            'options' => [
                'max' => 10.5,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);
    }

    /**
     * Конфигурирует правило для валидации
     */
    public function testConfigure(): void
    {
        $rule = new MaxCountRule([
            'key' => 'maxCount',
            'options' => [
                'max' => 1,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain);
        $this->assertTrue($chain->validate([1])->isSuccess());
        $this->assertFalse($chain->validate([1, 2])->isSuccess());
    }
}
