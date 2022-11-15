<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
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
}
