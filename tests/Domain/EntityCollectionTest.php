<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\EntityCollection;
use Fi1a\BitrixValidation\Domain\IBEntity;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Коллекция
 */
class EntityCollectionTest extends ModuleTestCase
{
    /**
     * Возвращает массив
     */
    public function testToArray(): void
    {
        $collection = new EntityCollection();
        $collection[] = new IBEntity(['id' => 1]);
        $collection[] = new IBEntity(['id' => 2]);
        $collection[] = new IBEntity(['id' => 3]);

        $this->assertIsArray($collection->toArray());
        $this->assertCount(3, $collection->toArray());
    }
}
