<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\FieldCollectionInterface;
use Fi1a\BitrixValidation\Domain\GroupCollectionInterface;
use Fi1a\BitrixValidation\Repositories\EntitySelect;
use Fi1a\BitrixValidation\Repositories\HLEntityRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * Репозиторий сущностей
 */
class HLEntityRepositoryTest extends EntityTestCase
{
    /**
     * Возвращает список сущностей Highload-блоков
     */
    public function testGetList(): void
    {
        $repository = new HLEntityRepository();
        $collection = $repository->getList();
        $this->assertInstanceOf(EntityCollectionInterface::class, $collection);
        $this->assertGreaterThanOrEqual(1, count($collection));
        $find = false;
        foreach ($collection as $entity) {
            if ((int) $entity['id'] === static::$hlId) {
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
        $select = new EntitySelect(true, true);
        $repository = new HLEntityRepository();
        $entity = $repository->getEntity(static::$hlId, $select);
        $this->assertInstanceOf(EntityInterface::class, $entity);
        $this->assertInstanceOf(FieldCollectionInterface::class, $entity->getFields());
        $this->assertCount(1, $entity->getFields());
        $this->assertInstanceOf(GroupCollectionInterface::class, $entity->getGroups());
        $this->assertCount(1, $entity->getGroups());
    }

    /**
     * Возвращает сущность (исключение)
     */
    public function testGetEntityNotFound(): void
    {
        $this->expectException(ErrorException::class);
        $repository = new HLEntityRepository();
        $repository->getEntity(100500);
    }
}
