<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Entity;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Сущность
 */
class EntityTest extends ModuleTestCase
{
    /**
     * Сущность
     */
    public function testHLEntity(): void
    {
        $entity = new Entity(['id' => 1,]);
        $this->assertEquals(1, $entity->getId());
        $this->assertEquals(1, $entity->id);
        $this->assertEquals(1, $entity['id']);
    }
}
