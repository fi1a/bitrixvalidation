<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Repositories\EntityRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * Репозиторий сущностей
 */
class EntityRepositoryTest extends EntityTestCase
{
    /**
     * Возвращает список сущностей инфоблоков
     */
    public function testGetListIB(): void
    {
        $repository = new EntityRepository();
        $collection = $repository->getListIB();
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
     * Возвращает список сущностей Highload-блоков
     */
    public function testGetListHL(): void
    {
        $repository = new EntityRepository();
        $collection = $repository->getListHL();
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
}
