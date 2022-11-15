<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\TestCase;

use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Loader;
use CIBlock;
use CIBlockType;
use ErrorException;

/**
 * Тесты модуля
 */
class EntityTestCase extends ModuleTestCase
{
    /**
     * @var int
     */
    protected static $iblockId;

    /**
     * @var int
     */
    protected static $hlId;

    /**
     * До начала вызова тестов
     */
    public static function setUpBeforeClass(): void
    {
        parent::setUpBeforeClass();

        Loader::includeModule('iblock');
        Loader::includeModule('highloadblock');

        $type = new CIBlockType();

        $result = $type->Add([
            'ID' => 'fbv_test',
            'SECTIONS' => 'Y',
            'IN_RSS' => 'N',
            'SORT' => 100,
            'LANG' => [
                'ru' => [
                    'NAME' => 'Тест',
                    'SECTION_NAME' => 'Sections',
                    'ELEMENT_NAME' => 'Products',
                ],
            ],
        ]);

        if (!$result) {
            throw new ErrorException('Can\'t add iblock type');
        }

        $ib = new CIBlock();
        static::$iblockId = (int) $ib->Add([
            'ACTIVE' => 'Y',
            'NAME' => 'BitrixValidation Test',
            'CODE' => 'BITRIXVALIDATION_TEST',
            'LIST_PAGE_URL' => '',
            'DETAIL_PAGE_URL' => '',
            'IBLOCK_TYPE_ID' => 'fbv_test',
            'SITE_ID' => ['s1'],
            'SORT' => 100,
            'PICTURE' => null,
            'DESCRIPTION' => null,
            'DESCRIPTION_TYPE' => null,
            'GROUP_ID' => [],
        ]);

        if (!static::$iblockId) {
            throw new ErrorException('Can\'t add iblock');
        }

        $result = HighloadBlockTable::add([
            'NAME' => 'BitrixValidationTest',
            'TABLE_NAME' => 'bitrix_validation_test',
        ]);
        if ($result->isSuccess()) {
            static::$hlId = (int) $result->getId();
        } else {
            throw new ErrorException(implode('; ', $result->getErrorMessages()));
        }
    }

    /**
     * После вызова тестов
     */
    public static function tearDownAfterClass(): void
    {
        if (static::$iblockId) {
            CIBlock::Delete(static::$iblockId);
            CIBlockType::Delete('fbv_test');
        }
        if (static::$hlId) {
            HighloadBlockTable::delete(static::$hlId);
        }
        parent::tearDownAfterClass();
    }
}
