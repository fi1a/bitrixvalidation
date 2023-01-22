<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Models\Rules\UrlRule;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;

/**
 * Является ли значение url адресом
 */
class UrlRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string',], UrlRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(UrlRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(UrlRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new UrlRule([
            'key' => 'url',
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
        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $group = $entity->getGroups()[0];

        $rule = new UrlRule([
            'key' => 'url',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => '1',
            'entity_type' => 'ib',
            'entity_id' => 1,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertTrue($chain->validate('https://url.ru')->isSuccess());
        $this->assertFalse($chain->validate('foo')->isSuccess());
    }
}
