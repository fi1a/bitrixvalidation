<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\NumericRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;

/**
 * Является ли значение числом
 */
class NumericRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string', 'number'], NumericRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(NumericRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(NumericRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new NumericRule([
            'key' => 'numeric',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals([], $rule->getOptions());
    }

    /**
     * Конфигурирует правило для валидации
     */
    public function testConfigure(): void
    {
        $rule = new NumericRule([
            'key' => 'numeric',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain);
        $this->assertTrue($chain->validate(1.1)->isSuccess());
        $this->assertFalse($chain->validate(false)->isSuccess());
    }
}
