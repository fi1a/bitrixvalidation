<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\NotInRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Допустимые значения (не строгая проверка значения)
 */
class NotInRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['number', 'string'], NotInRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(NotInRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(NotInRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new NotInRule([
            'key' => 'notIn',
            'options' => [
                'notIn' =>  ['foo', 'bar'],
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['notIn' =>  ['foo', 'bar'],], $rule->getOptions());
    }

    /**
     * Опции (исключение)
     */
    public function testOptionsExceptionEmpty(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new NotInRule([
            'key' => 'notIn',
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
     * Конфигурирует правило для валидации
     */
    public function testConfigure(): void
    {
        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $group = $entity->getGroups()[0];

        $rule = new NotInRule([
            'key' => 'notIn',
            'options' => [
                'notIn' =>  ['foo', 'bar'],
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertFalse($chain->validate('bar')->isSuccess());
        $this->assertFalse($chain->validate('FOO')->isSuccess());
        $this->assertFalse($chain->validate('foo')->isSuccess());
        $this->assertTrue($chain->validate('baz')->isSuccess());
    }
}
