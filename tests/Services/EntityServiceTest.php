<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Services;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\Rule\MinRule;
use Fi1a\BitrixValidation\Repositories\RuleRepository;
use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use InvalidArgumentException;

/**
 * Сервис сущностей
 */
class EntityServiceTest extends EntityTestCase
{
    /**
     * Возвращает список сущностей инфоблоков
     */
    public function testGetListIB(): void
    {
        $service = new EntityService();
        $collection = $service->getListIB();
        $this->assertInstanceOf(EntityCollectionInterface::class, $collection);
        $this->assertGreaterThanOrEqual(1, count($collection));
        $find = false;
        foreach ($collection as $item) {
            if ((int) $item['id'] === static::$iblockId) {
                $find = true;
            }
        }
        $this->assertTrue($find);
    }

    /**
     * Возвращает список сущностей Highload-блоков
     */
    public function testGetListHL(): void
    {
        $service = new EntityService();
        $collection = $service->getListHL();
        $this->assertInstanceOf(EntityCollectionInterface::class, $collection);
        $this->assertGreaterThanOrEqual(1, count($collection));
        $find = false;
        foreach ($collection as $item) {
            if ((int) $item['id'] === static::$hlId) {
                $find = true;
            }
        }
        $this->assertTrue($find);
    }

    /**
     * Возвращает сущность
     */
    public function testGetEntity(): void
    {
        $service = new EntityService();
        $entity = $service->getEntity('ib', static::$iblockId);
        $this->assertInstanceOf(
            EntityInterface::class,
            $entity
        );
        $this->assertEquals('ib', $entity->entityType);
        $entity = $service->getEntity('hl', static::$hlId);
        $this->assertInstanceOf(
            EntityInterface::class,
            $entity
        );
        $this->assertEquals('hl', $entity->entityType);
    }

    /**
     * Возвращает сущность
     */
    public function testGetEntityException(): void
    {
        $this->expectException(ErrorException::class);
        $service = new EntityService();
        $service->getEntity('unknown', static::$iblockId);
    }

    /**
     * Сохранение правил
     */
    public function testSaveRules(): void
    {
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $rules[0]->options = ['min' => 20];
        $rules[] = new MinRule([
            'key' => 'min',
            'options' => ['min' => 10],
            'sort' => 500,
            'field_id' => (string) static::$iblockPropertyId,
            'entity_type' => 'ib',
            'entity_id' => static::$iblockId,
            'multiple' => false,
        ]);
        $service = new EntityService();
        $this->assertTrue($service->saveEntityRules('ib', static::$iblockId, $rules->toArray()));
        $rules->delete(2);
        $this->assertTrue($service->saveEntityRules('ib', static::$iblockId, $rules->toArray()));
    }

    /**
     * Сохранение правил (исключение при пустом типе сущности)
     */
    public function testSaveRulesEntityTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->saveEntityRules('', static::$iblockId, []);
    }

    /**
     * Сохранение правил (исключение при пустом идентификаторе сущности)
     */
    public function testSaveRulesEntityIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->saveEntityRules('ib', 0, []);
    }

    /**
     * Возвращает правила
     */
    public function testGetRules(): void
    {
        $service = new EntityService();
        $this->assertIsArray($service->getRules());
    }
}
