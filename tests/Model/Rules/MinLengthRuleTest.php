<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Model\Rules;

use Fi1a\BitrixValidation\Model\Rules\MinLengthRule;
use Fi1a\BitrixValidation\Model\Rules\PrimaryId;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на минимальную длину строки
 */
class MinLengthRuleTest extends ModuleTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string'], MinLengthRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(MinLengthRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(MinLengthRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new MinLengthRule([
            'key' => 'minLength',
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
        $this->assertEquals(['min' => 10,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmpty(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MinLengthRule([
            'key' => 'minLength',
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
        new MinLengthRule([
            'key' => 'minLength',
            'options' => [
                'min' => 'foo',
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
     * Опции (исключение)
     */
    public function testOptionsExceptionNotInteger(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MinLengthRule([
            'key' => 'minLength',
            'options' => [
                'min' => 10.5,
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
        $rule = new MinLengthRule([
            'key' => 'minLength',
            'options' => [
                'min' => 2,
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
        $this->assertTrue($chain->validate('123')->isSuccess());
        $this->assertFalse($chain->validate('1')->isSuccess());
    }
}
