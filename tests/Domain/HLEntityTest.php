<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\HLEntity;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;

/**
 * Сущность "Highload-блок"
 */
class HLEntityTest extends ModuleTestCase
{
    /**
     * Сущность "Highload-блок"
     */
    public function testHLEntity(): void
    {
        $entity = new HLEntity(['id' => 1,]);
        $this->assertEquals(1, $entity->getId());
        $this->assertEquals(1, $entity->id);
        $this->assertEquals(1, $entity['id']);
        $this->assertIsString($entity->getEntityTypeName());
    }
}
