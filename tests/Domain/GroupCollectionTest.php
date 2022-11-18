<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Group;
use Fi1a\BitrixValidation\Domain\GroupCollection;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Коллекция
 */
class GroupCollectionTest extends ModuleTestCase
{
    /**
     * Возвращает массив
     */
    public function testToArray(): void
    {
        $collection = new GroupCollection();
        $collection[] = new Group([
            'id' => 1,
            'name' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $collection[] = new Group([
            'id' => 2,
            'name' => 'Field 2',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $collection[] = new Group([
            'id' => 3,
            'name' => 'Field 3',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);

        $this->assertIsArray($collection->toArray());
        $this->assertCount(3, $collection->toArray());
    }
}
