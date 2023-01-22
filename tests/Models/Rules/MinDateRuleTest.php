<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\MinDateRule;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;
use InvalidArgumentException;

/**
 * Минимальная дата
 */
class MinDateRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string'], MinDateRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(MinDateRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(MinDateRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new MinDateRule([
            'key' => 'minDate',
            'options' => [
                'minDate' => '01.01.2023',
                'format' => 'd.m.Y',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(
            [
                'minDate' => '01.01.2023',
                'format' => 'd.m.Y',
            ],
            $rule->getOptions()
        );
    }

    /**
     * Опции
     */
    public function testEmptyOptions(): void
    {
        $rule = new MinDateRule([
            'key' => 'minDate',
            'options' => [
                'minDate' => '01.01.2023 00:00:00',
            ],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);
        $this->assertEquals(
            [
                'minDate' => '01.01.2023 00:00:00',
                'format' => null,
            ],
            $rule->getOptions()
        );
    }

    /**
     * Опции
     */
    public function testEmptyMinDate(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MinDateRule([
            'key' => 'minDate',
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
     * Опции
     */
    public function testOptionsMinDateFormatException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new MinDateRule([
            'key' => 'minDate',
            'options' => [
                'minDate' => '01.01',
                'format' => 'd.m.Y',
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

        $rule = new MinDateRule([
            'key' => 'minDate',
            'options' => [
                'minDate' => '01.01.2023',
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
        $this->assertFalse($chain->validate('01.12.2022')->isSuccess());
    }
}
