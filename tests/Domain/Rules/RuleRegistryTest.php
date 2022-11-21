<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain\Rules;

use Fi1a\BitrixValidation\Domain\Rules\MinRule;
use Fi1a\BitrixValidation\Domain\Rules\RuleRegistry;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use InvalidArgumentException;

/**
 * Реестр правил
 */
class RuleRegistryTest extends ModuleTestCase
{
    /**
     * Добавить
     */
    public function testAdd(): void
    {
        $this->assertTrue(RuleRegistry::add('test1', MinRule::class));
        $this->assertFalse(RuleRegistry::add('test1', MinRule::class));
    }

    /**
     * Наличие
     *
     * @depends testAdd
     */
    public function testHas(): void
    {
        $this->assertFalse(RuleRegistry::has('unknown'));
        $this->assertTrue(RuleRegistry::has('test1'));
    }

    /**
     * Получение
     *
     * @depends testAdd
     */
    public function testGet(): void
    {
        $this->assertEquals(MinRule::class, RuleRegistry::get('test1'));
    }

    /**
     * Получение
     *
     * @depends testAdd
     */
    public function testGetException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        RuleRegistry::get('unknown');
    }

    /**
     * Удаление
     *
     * @depends testAdd
     */
    public function testAll(): void
    {
        $this->assertIsArray(RuleRegistry::all());
    }

    /**
     * Удаление
     *
     * @depends testAdd
     */
    public function testDelete(): void
    {
        $this->assertTrue(RuleRegistry::delete('test1'));
        $this->assertFalse(RuleRegistry::delete('test1'));
    }
}
