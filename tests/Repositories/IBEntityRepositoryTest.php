<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\FieldCollectionInterface;
use Fi1a\BitrixValidation\Domain\GroupCollectionInterface;
use Fi1a\BitrixValidation\Repositories\EntitySelect;
use Fi1a\BitrixValidation\Repositories\IBEntityRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * Репозиторий сущностей
 */
class IBEntityRepositoryTest extends EntityTestCase
{
    /**
     * Возвращает список сущностей инфоблоков
     */
    public function testGetList(): void
    {
        $repository = new IBEntityRepository();
        $collection = $repository->getList();
        $this->assertInstanceOf(EntityCollectionInterface::class, $collection);
        $this->assertGreaterThanOrEqual(1, count($collection));
        $find = false;
        foreach ($collection as $entity) {
            if ((int) $entity['id'] === static::$iblockId) {
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
        $repository = new IBEntityRepository();
        $entity = $repository->getEntity(static::$iblockId, $select);
        $this->assertInstanceOf(EntityInterface::class, $entity);
        $this->assertInstanceOf(FieldCollectionInterface::class, $entity->getFields());
        $this->assertCount(6, $entity->getFields());
        $this->assertInstanceOf(GroupCollectionInterface::class, $entity->getGroups());
        $this->assertCount(3, $entity->getGroups());
    }

    /**
     * Возвращает сущность (исключение)
     */
    public function testGetEntityNotFound(): void
    {
        $this->expectException(ErrorException::class);
        $repository = new IBEntityRepository();
        $repository->getEntity(100500);
    }
}
