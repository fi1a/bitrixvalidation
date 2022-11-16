<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Entity;
use Fi1a\BitrixValidation\Domain\Field;
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
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $entity = new Entity(['id' => 1, 'fields' => [$field],]);
        $this->assertIsArray($entity->toArray());
    }
}
