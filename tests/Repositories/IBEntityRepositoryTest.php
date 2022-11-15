<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
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
}
