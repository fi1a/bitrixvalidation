<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models;

use Fi1a\BitrixValidation\Models\Entity;
use Fi1a\BitrixValidation\Models\EntityCollection;
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
        $collection[] = new Entity(['id' => 1]);
        $collection[] = new Entity(['id' => 2]);
        $collection[] = new Entity(['id' => 3]);

        $this->assertIsArray($collection->toArray());
        $this->assertCount(3, $collection->toArray());
    }
}
