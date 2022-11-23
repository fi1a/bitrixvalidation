<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Model\Rules;

use Fi1a\BitrixValidation\Model\Rules\MaxRule;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на максимальное значение
 */
class MaxRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['number'], MaxRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(MaxRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(MaxRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new MaxRule([
            'key' => 'max',
            'options' => [
                'max' => 10,
            ],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['max' => 10,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmpty(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MaxRule([
            'key' => 'max',
            'options' => [],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionNotNumeric(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MaxRule([
            'key' => 'max',
            'options' => [
                'max' => 'foo',
            ],
            'sort' => 500,
            'id' => 1,
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
        $rule = new MaxRule([
            'key' => 'max',
            'options' => [
                'max' => 1,
            ],
            'sort' => 500,
            'id' => 1,
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain);
        $this->assertTrue($chain->validate(1)->isSuccess());
        $this->assertFalse($chain->validate(2)->isSuccess());
    }
}
