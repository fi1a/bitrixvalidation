<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Field;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use InvalidArgumentException;

/**
 * Тестирование поля
 */
class FieldTest extends ModuleTestCase
{
    /**
     * Поле
     */
    public function testField(): void
    {
        $field = new Field([
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
        $this->assertEquals(1, $field->id);
        $this->assertEquals('Field 1', $field->name);
        $this->assertEquals('Field 1', $field->title);
        $this->assertEquals('string', $field->type);
        $this->assertEquals('field', $field->internalType);
        $this->assertFalse($field->multiple);
    }

    /**
     * Исключение при пустом id
     */
    public function testIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => null,
            'name' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при пустом name
     */
    public function testNameException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => '',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при пустом title
     */
    public function testTitleException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => 'Field 1',
            'title' => '',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при пустом type
     */
    public function testTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => 'Field 1',
            'type' => '',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при неизвестном type
     */
    public function testUnknownTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => 'Field 1',
            'type' => 'unknown',
            'internal_type' => 'field',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при пустом internal_type
     */
    public function testInternalTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => 'Field 1',
            'type' => 'string',
            'internal_type' => '',
            'multiple' => false,
        ]);
    }

    /**
     * Исключение при неизвестном internal_type
     */
    public function testUnknownInternalTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Field([
            'id' => 1,
            'name' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'unknown',
            'multiple' => false,
        ]);
    }
}
