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
use Fi1a\BitrixValidation\ORM\RuleTable;

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
    protected static $iblockId2;

    /**
     * @var int
     */
    protected static $iblockId3;

    /**
     * @var int
     */
    protected static $hlId;

    /**
     * @var int
     */
    protected static $hlId2;

    /**
     * @var int[]
     */
    protected static $ruleIds = [];

    /**
     * @var int
     */
    protected static $iblockPropertyId;

    /**
     * @var int
     */
    protected static $iblockMultiplePropertyId;

    /**
     * @var int
     */
    protected static $userTypeId;

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

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => 'NAME',
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
            'MESSAGE' => '{{name}}, {{min}}',
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        static::$iblockId2 = (int) $ib->Add([
            'ACTIVE' => 'Y',
            'NAME' => 'BitrixValidation Test 2',
            'CODE' => 'BITRIXVALIDATION_TEST_2',
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

        if (!static::$iblockId2) {
            throw new ErrorException('Не удалось добавить инфоблок');
        }

        static::$iblockId3 = (int) $ib->Add([
            'ACTIVE' => 'Y',
            'NAME' => 'BitrixValidation Test 3',
            'CODE' => 'BITRIXVALIDATION_TEST_3',
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

        if (!static::$iblockId3) {
            throw new ErrorException('Не удалось добавить инфоблок');
        }

        $result = RuleTable::add([
            'KEY' => 'alpha',
            'OPTIONS' => '{}',
            'SORT' => 500,
            'FIELD_ID' => 'NAME',
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId3,
            'MESSAGE' => '',
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $ibp = new CIBlockProperty();
        static::$iblockPropertyId = $ibp->Add([
            'NAME' => 'FBV Test 1',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST1',
            'PROPERTY_TYPE' => 'N',
            'USER_TYPE' => '',
            'IBLOCK_ID' => static::$iblockId,
        ]);

        if (!static::$iblockPropertyId) {
            throw new ErrorException('Не удалось добавить свойство инфоблока');
        }

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => (string) static::$iblockPropertyId,
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $propertyId = $ibp->Add([
            'NAME' => 'FBV Test 1',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST1',
            'PROPERTY_TYPE' => 'N',
            'USER_TYPE' => '',
            'IBLOCK_ID' => static::$iblockId2,
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

        static::$iblockMultiplePropertyId = $ibp->Add([
            'NAME' => 'FBV Test 3',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST3',
            'PROPERTY_TYPE' => 'N',
            'USER_TYPE' => '',
            'IBLOCK_ID' => static::$iblockId,
            'MULTIPLE' => 'Y',
        ]);

        if (!static::$iblockMultiplePropertyId) {
            throw new ErrorException('Не удалось добавить свойство инфоблока');
        }

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 2}',
            'SORT' => 500,
            'FIELD_ID' => static::$iblockMultiplePropertyId,
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $result = RuleTable::add([
            'KEY' => 'minCount',
            'OPTIONS' => '{"min": 2}',
            'SORT' => 500,
            'FIELD_ID' => static::$iblockMultiplePropertyId,
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
            'MULTIPLE' => 1,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => '100500',
            'ENTITY_TYPE' => 'ib',
            'ENTITY_ID' => static::$iblockId,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $propertyId = $ibp->Add([
            'NAME' => 'FBV Test 3',
            'ACTIVE' => 'Y',
            'SORT' => '600',
            'CODE' => 'FBV_TEST3',
            'PROPERTY_TYPE' => 'N',
            'USER_TYPE' => '',
            'IBLOCK_ID' => static::$iblockId2,
            'MULTIPLE' => 'Y',
        ]);

        if (!$propertyId) {
            throw new ErrorException('Не удалось добавить свойство инфоблока');
        }

        $result = HighloadBlockTable::add([
            'NAME' => 'BitrixValidationTest' . uniqid(),
            'TABLE_NAME' => 'bitrix_validation_test' . uniqid(),
        ]);
        if ($result->isSuccess()) {
            static::$hlId = (int) $result->getId();
        } else {
            throw new ErrorException(implode('; ', $result->getErrorMessages()));
        }

        $userTypeEntity  = new CUserTypeEntity();
        static::$userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_' . static::$hlId,
            'FIELD_NAME' => 'UF_FBV_TEST1',
            'USER_TYPE_ID' => 'integer',
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
        if (!static::$userTypeId) {
            throw new ErrorException('Не удалось добавить пользовательское поле');
        }

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => (string) static::$userTypeId,
            'ENTITY_TYPE' => 'hl',
            'ENTITY_ID' => static::$hlId,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
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

        $result = RuleTable::add([
            'KEY' => 'min',
            'OPTIONS' => '{"min": 10}',
            'SORT' => 500,
            'FIELD_ID' => (string) $userTypeId,
            'ENTITY_TYPE' => 'hl',
            'ENTITY_ID' => static::$hlId,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_' . static::$hlId,
            'FIELD_NAME' => 'UF_FBV_TEST3',
            'USER_TYPE_ID' => 'integer',
            'XML_ID' => '',
            'SORT' => '500',
            'MULTIPLE' => 'Y',
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

        $result = RuleTable::add([
            'KEY' => 'minCount',
            'OPTIONS' => '{"min": 2}',
            'SORT' => 500,
            'FIELD_ID' => (string) $userTypeId,
            'ENTITY_TYPE' => 'hl',
            'ENTITY_ID' => static::$hlId,
            'MESSAGE' => '{{name}}, {{min}}',
            'MULTIPLE' => 1,
        ]);
        if ($result->isSuccess()) {
            static::$ruleIds[] = $result->getId();
        }

        $result = HighloadBlockTable::add([
            'NAME' => 'BitrixValidationTest' . uniqid(),
            'TABLE_NAME' => 'bitrix_validation_test_' . uniqid(),
        ]);
        if ($result->isSuccess()) {
            static::$hlId2 = (int) $result->getId();
        } else {
            throw new ErrorException(implode('; ', $result->getErrorMessages()));
        }

        $userTypeEntity  = new CUserTypeEntity();
        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_' . static::$hlId2,
            'FIELD_NAME' => 'UF_FBV_TEST1',
            'USER_TYPE_ID' => 'integer',
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
        }
        if (static::$iblockId2) {
            CIBlock::Delete(static::$iblockId2);
        }
        if (static::$iblockId3) {
            CIBlock::Delete(static::$iblockId3);
        }
        CIBlockType::Delete('fbv_test');
        if (static::$hlId) {
            HighloadBlockTable::delete(static::$hlId);
        }
        if (static::$hlId2) {
            HighloadBlockTable::delete(static::$hlId2);
        }
        if (count(static::$ruleIds)) {
            foreach (static::$ruleIds as $id) {
                RuleTable::delete($id);
            }
            static::$ruleIds = [];
        }
        parent::tearDownAfterClass();
    }
}
