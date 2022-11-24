<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Models;

use Fi1a\BitrixValidation\Models\Entity;
use Fi1a\BitrixValidation\Models\Field;
use Fi1a\BitrixValidation\Models\Group;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Сущность
 */
class EntityTest extends ModuleTestCase
{
    /**
     * Сущность
     */
    public function testEntity(): void
    {
        $entity = new Entity(['id' => 1,]);
        $this->assertEquals(1, $entity->getId());
        $this->assertEquals(1, $entity->id);
        $this->assertEquals(1, $entity['id']);
    }

    /**
     * В массив
     */
    public function testToArray(): void
    {
        $field = new Field([
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $group = new Group([
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
            'rules' => [],
        ]);
        $entity = new Entity(['id' => 1, 'fields' => [$field], 'groups' => [$group]]);
        $this->assertIsArray($entity->toArray());
    }
}
