<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\ValidationRules\CountAdapter;

use CIBlockElement;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\IBlockCountAdapter;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * Адаптер для инфоблоков
 */
class IBlockCountAdapterTest extends EntityTestCase
{
    /**
     * Возвращает кол-во элементов по фильтру
     */
    public function testGetCount(): void
    {
        $instance = new CIBlockElement();

        $elementId = $instance->Add([
            'IBLOCK_ID' => static::$iblockId2,
            'NAME' => 'exist',
            'ACTIVE' => 'Y',
        ]);

        $this->assertIsNumeric($elementId);

        $adapter = new IBlockCountAdapter(static::$iblockId2);
        $this->assertEquals(1, $adapter->getCount(['=NAME' => 'exist']));
        $this->assertEquals(0, $adapter->getCount(['=NAME' => 'not_exist']));
    }
}
