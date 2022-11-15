<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\IBEntity;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Сущность "Инфоблок"
 */
class IBEntityTest extends ModuleTestCase
{
    /**
     * Сущность "Инфоблок"
     */
    public function testIBEntity(): void
    {
        $entity = new IBEntity(['id' => 1,]);
        $this->assertEquals(1, $entity->getId());
        $this->assertEquals(1, $entity->id);
        $this->assertEquals(1, $entity['id']);
        $this->assertIsString($entity->getEntityTypeName());
    }
}
