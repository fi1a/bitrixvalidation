<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\BetweenCountRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверка на минимальное и максимальное количество элементов в массиве
 */
class BetweenCountRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['multiple'], BetweenCountRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(BetweenCountRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(BetweenCountRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 10,
                'max' => 20,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);
        $this->assertEquals(['min' => 10, 'max' => 20,], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmptyMin(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenCountRule([
            'key' => 'betweenCount',
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
    public function testOptionsExceptionEmptyMax(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 10,
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
    public function testOptionsExceptionNotNumericMin(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 'foo',
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
    public function testOptionsExceptionNotNumericMax(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 10,
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
        new BetweenCountRule([
            'key' => 'betweenCount',
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
     * Опции (исключение)
     */
    public function testOptionsExceptionGreaterAndLess(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 10,
                'max' => 5,
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
        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $group = $entity->getGroups()[0];

        $rule = new BetweenCountRule([
            'key' => 'betweenCount',
            'options' => [
                'min' => 1,
                'max' => 2,
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => true,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertTrue($chain->validate([1])->isSuccess());
        $this->assertFalse($chain->validate([1, 2, 3])->isSuccess());
    }
}
