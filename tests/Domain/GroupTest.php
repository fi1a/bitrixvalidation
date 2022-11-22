<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Group;
use Fi1a\BitrixValidation\Domain\Rules\MinRule;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollection;
use Fi1a\Unit\BitrixValidation\TestCase\ModuleTestCase;
use InvalidArgumentException;

/**
 * Тестирование группы
 */
class GroupTest extends ModuleTestCase
{
    /**
     * Поле
     */
    public function testField(): void
    {
        $field = new Group([
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
        new Group([
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
        new Group([
            'id' => 1,
            'name' => '',
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
        new Group([
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
        new Group([
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
        new Group([
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
        new Group([
            'id' => 1,
            'name' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'unknown',
            'multiple' => false,
        ]);
    }

    /**
     * Преобразование в массив
     */
    public function testToArray(): void
    {
        $fields = [
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
            'rules' => new RuleCollection([new MinRule([
                'key' => 'min',
                'options' => [
                    'min' => 10,
                ],
                'sort' => 500,
                'id' => 1,
                'field_id' => '1',
                'entity_type' => 'ib',
                'entity_id' => 1,
                'multiple' => false,
            ]),
            ]),
            'multiple_rules' => new RuleCollection([new MinRule([
                'key' => 'minCount',
                'options' => [
                    'min' => 10,
                ],
                'sort' => 500,
                'id' => 1,
                'field_id' => '1',
                'entity_type' => 'ib',
                'entity_id' => 1,
                'multiple' => true,
            ]),
            ]),
        ];
        $equals = [
            'id' => 1,
            'name' => 'Field 1',
            'title' => 'Field 1',
            'type' => 'string',
            'internal_type' => 'field',
            'multiple' => false,
            'rules' => [
                [
                    'key' => 'min',
                    'options' => [
                        'min' => 10,
                    ],
                    'sort' => 500,
                    'id' => 1,
                    'field_id' => '1',
                    'entity_type' => 'ib',
                    'entity_id' => 1,
                    'multiple' => false,
                    'message' => null,
                ],
            ],
            'multiple_rules' => [
                [
                    'key' => 'minCount',
                    'options' => [
                        'min' => 10,
                    ],
                    'sort' => 500,
                    'id' => 1,
                    'field_id' => '1',
                    'entity_type' => 'ib',
                    'entity_id' => 1,
                    'multiple' => true,
                    'message' => null,
                ],
            ],
        ];
        $group = new Group($fields);
        $this->assertIsArray($group->toArray());
        $this->assertEquals($equals, $group->toArray());
    }
}
