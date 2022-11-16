<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\TestCase;

use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Loader;
use CIBlock;
use CIBlockProperty;
use CIBlockType;
use CUserTypeEntity;
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
            throw new ErrorException('Не удалось добавить тип инфоблока');
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
            throw new ErrorException('Не удалось добавить инфоблок');
        }

        $ibp = new CIBlockProperty();
        $propertyId = $ibp->Add([
            'NAME' => 'FBV Test 1',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST1',
            'PROPERTY_TYPE' => 'S',
            'USER_TYPE' => 'HTML',
            'IBLOCK_ID' => static::$iblockId,
        ]);

        if (!$propertyId) {
            throw new ErrorException('Не удалось добавить свойство инфоблока');
        }

        $propertyId = $ibp->Add([
            'NAME' => 'FBV Test 2',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST2',
            'PROPERTY_TYPE' => 'E',
            'USER_TYPE' => '',
            'IBLOCK_ID' => static::$iblockId,
        ]);

        if (!$propertyId) {
            throw new ErrorException('Не удалось добавить свойство инфоблока');
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

        $userTypeEntity  = new CUserTypeEntity();
        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_' . static::$hlId,
            'FIELD_NAME' => 'UF_FBV_TEST1',
            'USER_TYPE_ID' => 'string',
            'XML_ID' => '',
            'SORT' => '500',
            'MULTIPLE' => 'N',
            'MANDATORY' => 'Y',
            'SETTINGS' => [
                'DEFAULT_VALUE' => '',
                'SIZE' => '20',
                'ROWS' => '1',
                'MIN_LENGTH' => '0',
                'MAX_LENGTH' => '0',
                'REGEXP' => '',
            ],
            'EDIT_FORM_LABEL' => ['ru' => '', 'en' => '',],
            'ERROR_MESSAGE' => null,
            'HELP_MESSAGE' => ['ru' => '', 'en' => '',],
        ]);
        if (!$userTypeId) {
            throw new ErrorException('Не удалось добавить пользовательское поле');
        }

        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_' . static::$hlId,
            'FIELD_NAME' => 'UF_FBV_TEST2',
            'USER_TYPE_ID' => 'enumeration',
            'XML_ID' => '',
            'SORT' => '500',
            'MULTIPLE' => 'N',
            'MANDATORY' => 'Y',
            'SETTINGS' => [
                'DEFAULT_VALUE' => '',
                'SIZE' => '20',
                'ROWS' => '1',
                'MIN_LENGTH' => '0',
                'MAX_LENGTH' => '0',
                'REGEXP' => '',
            ],
            'EDIT_FORM_LABEL' => ['ru' => '', 'en' => '',],
            'ERROR_MESSAGE' => null,
            'HELP_MESSAGE' => ['ru' => '', 'en' => '',],
        ]);
        if (!$userTypeId) {
            throw new ErrorException('Не удалось добавить пользовательское поле');
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
