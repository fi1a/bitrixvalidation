<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Services;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\Rules\MinRule;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\ORM\RuleTable;
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
            'message' => null,
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

    /**
     * Удаляет правила для поля
     */
    public function testDeleteFieldRules(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockPropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertGreaterThanOrEqual(1, count($rules));

        $service = new EntityService();
        $service->deleteFieldRules('ib', static::$iblockId, static::$iblockPropertyId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockPropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаляет правила для поля (исключение при пустом типе сущности)
     */
    public function testDeleteFieldRulesEntityTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldRules('', static::$iblockId, static::$iblockPropertyId);
    }

    /**
     * Удаляет правила для поля (исключение для идентификатора сущности)
     */
    public function testDeleteFieldRulesEntityIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldRules('ib', 0, static::$iblockPropertyId);
    }

    /**
     * Удаляет правила для поля (исключение для идентификатора поля)
     */
    public function testDeleteFieldRulesFieldIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldRules('ib', static::$iblockId, 0);
    }

    /**
     * Удаляет правила для множественного значения поля
     */
    public function testDeleteFieldMultipleRules(): void
    {
        $result = RuleTable::add([
            'KEY' => 'minCount',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => static::$iblockMultiplePropertyId,
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
            'MULTIPLE' => 1,
        ]);
        $this->assertTrue($result->isSuccess());

        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
                '=MULTIPLE' => 1,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertGreaterThanOrEqual(1, count($rules));

        $service = new EntityService();
        $service->deleteFieldMultipleRules('ib', static::$iblockId, static::$iblockMultiplePropertyId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
                '=MULTIPLE' => 1,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаляет правила для поля (исключение при пустом типе сущности)
     */
    public function testDeleteFieldMultipleRulesEntityTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldMultipleRules('', static::$iblockId, static::$iblockMultiplePropertyId);
    }

    /**
     * Удаляет правила для поля (исключение для идентификатора сущности)
     */
    public function testDeleteFieldMultipleRulesEntityIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldMultipleRules('ib', 0, static::$iblockMultiplePropertyId);
    }

    /**
     * Удаляет правила для поля (исключение для идентификатора поля)
     */
    public function testDeleteFieldMultipleRulesFieldIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteFieldMultipleRules('ib', static::$iblockId, 0);
    }

    /**
     * Удаляет правила для сущности
     */
    public function testDeleteEntityRules(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(3, $rules);

        $service = new EntityService();
        $service->deleteEntityRules('hl', static::$hlId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаляет правила для сущности (исключение при пустом типе сущности)
     */
    public function testDeleteEntityRulesEntityTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteEntityRules('', static::$hlId);
    }

    /**
     * Удаляет правила для сущности (исключение для идентификатора сущности)
     */
    public function testDeleteEntityRulesEntityIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $service = new EntityService();
        $service->deleteEntityRules('hl', 0);
    }
}
