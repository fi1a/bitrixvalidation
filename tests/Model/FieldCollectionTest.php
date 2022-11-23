<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Model;

use Fi1a\BitrixValidation\Model\Field;
use Fi1a\BitrixValidation\Model\FieldCollection;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Коллекция
 */
class FieldCollectionTest extends ModuleTestCase
{
    /**
     * Возвращает массив
     */
    public function testToArray(): void
    {
        $collection = new FieldCollection();
        $collection[] = new Field([
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $collection[] = new Field([
            'id' => 2,
            'name' => 'Field 2',
            'title' => 'Field 2',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $collection[] = new Field([
            'id' => 3,
            'name' => 'Field 3',
            'title' => 'Field 3',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);

        $this->assertIsArray($collection->toArray());
        $this->assertCount(3, $collection->toArray());
    }
}
