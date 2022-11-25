<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models\Rules;

use Bitrix\Highloadblock\HighloadBlockTable;
use CIBlockElement;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\BitrixValidation\Models\Rules\PrimaryId;
use Fi1a\BitrixValidation\Models\Rules\UniqueRule;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;

/**
 * Уникальное значение
 */
class UniqueRuleTest extends EntityTestCase
{
    /**
     * Возврашаемые типы
     */
    public function testGetTypes(): void
    {
        $this->assertEquals(['string', 'number'], UniqueRule::getTypes());
    }

    /**
     * Возврашаемые заголовок
     */
    public function testGetTitle(): void
    {
        $this->assertIsString(UniqueRule::getTitle());
    }

    /**
     * Возврашаемые описание
     */
    public function testGetMessageDescription(): void
    {
        $this->assertIsString(UniqueRule::getMessageDescription());
    }

    /**
     * Опции
     */
    public function testOptions(): void
    {
        $rule = new UniqueRule([
            'key' => 'unique',
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
    public function testConfigureIBlock(): void
    {
        $instance = new CIBlockElement();

        $elementId = $instance->Add([
            'IBLOCK_ID' => static::$iblockId,
            'NAME' => '20',
            'ACTIVE' => 'Y',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 10,
                'FBV_TEST2' => 10,
                'FBV_TEST3' => [10, 20,],
            ],
        ]);

        $this->assertIsNumeric($elementId);

        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $group = null;
        foreach ($entity->getGroups() as $item) {
            if ($item->getId() === 'NAME') {
                $group = $item;

                break;
            }
        }

        $this->assertInstanceOf(GroupInterface::class, $group);

        $rule = new UniqueRule([
            'key' => 'unique',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => 'NAME',
            'entity_type' => 'ib',
            'entity_id' => static::$iblockId,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertTrue($chain->validate('30')->isSuccess());
        $this->assertFalse($chain->validate('20')->isSuccess());

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, (int) $elementId);
        $this->assertTrue($chain->validate('30')->isSuccess());
        $this->assertTrue($chain->validate('20')->isSuccess());

        $group = null;
        foreach ($entity->getGroups() as $item) {
            if ($item->getId() === (string) static::$iblockPropertyId) {
                $group = $item;

                break;
            }
        }

        $this->assertInstanceOf(GroupInterface::class, $group);

        $rule = new UniqueRule([
            'key' => 'unique',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => (string) static::$iblockPropertyId,
            'entity_type' => 'ib',
            'entity_id' => static::$iblockId,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertTrue($chain->validate(30)->isSuccess());
        $this->assertFalse($chain->validate(10)->isSuccess());

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, (int) $elementId);
        $this->assertTrue($chain->validate(30)->isSuccess());
        $this->assertTrue($chain->validate(10)->isSuccess());
    }

    /**
     * Конфигурирует правило для валидации
     */
    public function testConfigureHl(): void
    {
        $class = HighloadBlockTable::compileEntity(static::$hlId)->getDataClass();

        $result = $class::add([
            'UF_FBV_TEST1'  => 1,
        ]);

        $this->assertTrue($result->isSuccess());

        $service = new EntityService();
        $entity = $service->getEntity('hl', static::$hlId);
        $group = null;
        foreach ($entity->getGroups() as $item) {
            if ($item->getId() === (string) static::$userTypeId) {
                $group = $item;

                break;
            }
        }

        $this->assertInstanceOf(GroupInterface::class, $group);

        $rule = new UniqueRule([
            'key' => 'unique',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => (string) static::$userTypeId,
            'entity_type' => 'hl',
            'entity_id' => static::$hlId,
            'multiple' => false,
        ]);

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
        $this->assertTrue($chain->validate(2)->isSuccess());
        $this->assertFalse($chain->validate(1)->isSuccess());

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, (int) $result->getId());
        $this->assertTrue($chain->validate(2)->isSuccess());
        $this->assertTrue($chain->validate(1)->isSuccess());
    }

    /**
     * Конфигурирует правило для валидации
     */
    public function testConfigureException(): void
    {
        $this->expectException(\LogicException::class);

        $service = new EntityService();
        $entity = $service->getEntity('hl', static::$hlId);
        $group = null;
        foreach ($entity->getGroups() as $item) {
            if ($item->getId() === (string) static::$userTypeId) {
                $group = $item;

                break;
            }
        }

        $rule = new UniqueRule([
            'key' => 'unique',
            'options' => [],
            'sort' => 500,
            'id' => new PrimaryId(1),
            'field_id' => (string) static::$userTypeId,
            'entity_type' => 'hl',
            'entity_id' => static::$hlId,
            'multiple' => false,
        ]);

        $entity->entityType = 'unknown';

        $chain = AllOf::create();
        $rule->configure($chain, $entity, $group, null);
    }
}
