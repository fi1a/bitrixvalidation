<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\EqualDateRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Проверяет дату на равенство
 */
class EqualDateRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string'], EqualDateRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(EqualDateRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(EqualDateRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new EqualDateRule([
            'key' => 'equalDate',
            'options' => [
                'equalDate' => '21.01.2023',
                'format' => 'd.m.Y',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['equalDate' => '21.01.2023', 'format' => 'd.m.Y',], $rule->getOptions());
    }

    /**
     * Опции
     */
    public function testEmptyOptions(): void
    {
        $rule = new EqualDateRule([
            'key' => 'equalDate',
            'options' => [
                'equalDate' => '21.01.2023',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(['equalDate' => '21.01.2023', 'format' => null,], $rule->getOptions());
    }

    /**
     * Опции
     */
    public function testEmptyEqualDate(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new EqualDateRule([
            'key' => 'equalDate',
            'options' => [
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
        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $group = $entity->getGroups()[0];

        $rule = new EqualDateRule([
            'key' => 'equalDate',
            'options' => [
                'equalDate' => '21.01.2023',
                'format' => 'd.m.Y',
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
        $this->assertTrue($chain->validate('21.01.2023')->isSuccess());
        $this->assertFalse($chain->validate('21-01-2023')->isSuccess());
        $this->assertFalse($chain->validate('01.01.2023')->isSuccess());
    }
}
