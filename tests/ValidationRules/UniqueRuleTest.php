<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\ValidationRules;

use CIBlockElement;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\IBlockCountAdapter;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use Fi1a\Validation\AllOf;
use Fi1a\Validation\Validator;

/**
 * Проверка на уникальное значение
 */
class UniqueRuleTest extends EntityTestCase
{
    /**
     * @var int
     */
    private static $elementId;

    /**
     * До начала вызова тестов
     */
    public static function setUpBeforeClass(): void
    {
        parent::setUpBeforeClass();

        $instance = new CIBlockElement();

        static::$elementId = $instance->Add([
            'IBLOCK_ID' => static::$iblockId2,
            'NAME' => 'exist',
            'ACTIVE' => 'Y',
        ]);

        if (!static::$elementId) {
            throw new \ErrorException('Элемент не удалось добавить');
        }
    }

    /**
     * Проверка на уникальное значение
     */
    public function testUnique(): void
    {
        $adapter = new IBlockCountAdapter(static::$iblockId2);
        $column = 'NAME';

        $this->assertTrue(
            AllOf::create()->unique($adapter, $column, null)->validate('not_exist')->isSuccess()
        );
        $this->assertFalse(
            AllOf::create()->unique($adapter, $column, null)->validate('exist')->isSuccess()
        );
        $this->assertTrue(
            AllOf::create()->unique($adapter, $column, static::$elementId)->validate('not_exist')->isSuccess()
        );
        $this->assertTrue(
            AllOf::create()->unique($adapter, $column, static::$elementId)->validate('exist')->isSuccess()
        );
    }

    /**
     * Значение должно быть буквенно-цифровым
     */
    public function testAlphaNumericValidator(): void
    {
        $adapter = new IBlockCountAdapter(static::$iblockId2);
        $column = 'NAME';

        $validator = new Validator();
        $validation = $validator->make(
            ['foo' => 'not_exist'],
            ['foo' => AllOf::create()->unique($adapter, $column, null)]
        );
        $this->assertTrue($validation->validate()->isSuccess());
        $validation->setValues(['foo' => 'exist']);
        $this->assertFalse($validation->validate()->isSuccess());
        $validation = $validator->make([], ['foo' => AllOf::create()->unique($adapter, $column, null)]);
        $this->assertTrue($validation->validate()->isSuccess());
    }
}
