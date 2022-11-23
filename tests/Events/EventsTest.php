<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Events;

use Bitrix\Highloadblock\HighloadBlockTable;
use CIBlock;
use CIBlockElement;
use CIBlockProperty;
use CIBlockType;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Events\Events;
use Fi1a\BitrixValidation\Model\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\Repositories\RuleRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * События
 */
class EventsTest extends EntityTestCase
{
    /**
     * Валидация при добавлении элемента инфоблока
     */
    public function testOnBeforeIBlockElementAddAndUpdate(): void
    {
        $instance = new CIBlockElement();

        $result = $instance->Add([
            'IBLOCK_ID' => static::$iblockId,
            'NAME' => 'Test name 1',
            'ACTIVE' => 'Y',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 1,
                'FBV_TEST3' => [1, '',],
            ],
        ]);

        $this->assertFalse($result);

        $id = $instance->Add([
            'IBLOCK_ID' => static::$iblockId,
            'NAME' => '20',
            'ACTIVE' => 'Y',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 10,
                'FBV_TEST2' => 10,
                'FBV_TEST3' => [10, 20,],
            ],
        ]);

        $this->assertIsNumeric($id);

        $result = $instance->Update($id, [
            'NAME' => 'Test name 1',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 1,
                'FBV_TEST3' => [1, '',],
            ],
        ]);

        $this->assertFalse($result);

        $result = $instance->Update($id, [
            'NAME' => '20',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 10,
                'FBV_TEST2' => 10,
                'FBV_TEST3' => [10, 20,],
            ],
        ]);

        $this->assertTrue($result);
    }

    /**
     * Валидация при добавлении элемента инфоблока
     */
    public function testOnBeforeIBlockElementAddAndUpdateAdmin(): void
    {
        $instance = new CIBlockElement();

        $result = $instance->Add([
            'IBLOCK_ID' => static::$iblockId,
            'NAME' => 'Test name 1',
            'ACTIVE' => 'Y',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => [['VALUE' => 1,]],
                'FBV_TEST3' => [
                    [
                        'VALUE' => 1,
                    ],
                    [
                        'VALUE' => '',
                    ],
                ],
            ],
        ]);

        $this->assertFalse($result);
    }

    /**
     * Валидация при добавлении элемента инфоблока
     */
    public function testOnBeforeIBlockElementAddAndUpdateNoRules(): void
    {
        $instance = new CIBlockElement();

        $result = $instance->Add([
            'IBLOCK_ID' => static::$iblockId2,
            'NAME' => 'Test name 1',
            'ACTIVE' => 'Y',
            'PROPERTY_VALUES' => [
                'FBV_TEST1' => 1,
                'FBV_TEST3' => [1, '',],
            ],
        ]);

        $this->assertIsNumeric($result);
    }

    /**
     * Валидация при добавлении элемента highloadblock'а
     */
    public function testOnBeforeHighloadBlockAddAndUpdate(): void
    {
        Events::onBeforeProlog();

        $entity = HighloadBlockTable::compileEntity(static::$hlId);
        $class = $entity->getDataClass();

        $result = $class::add([
            'UF_FBV_TEST1' => 5,
            'UF_FBV_TEST3' => [1, ''],
        ]);

        $this->assertFalse($result->isSuccess());

        $result = $class::add([
            'UF_FBV_TEST1' => 10,
            'UF_FBV_TEST2' => 10,
            'UF_FBV_TEST3' => [1, 2,],
        ]);

        $this->assertTrue($result->isSuccess());
        $id = $result->getId();

        $result = $class::update($id, [
            'UF_FBV_TEST1' => 5,
            'UF_FBV_TEST3' => [1, ''],
        ]);

        $this->assertFalse($result->isSuccess());

        $result = $class::update($id, [
            'UF_FBV_TEST1' => 10,
            'UF_FBV_TEST2' => 10,
            'UF_FBV_TEST3' => [1, 2,],
        ]);

        $this->assertTrue($result->isSuccess());
    }

    /**
     * Валидация при добавлении элемента highloadblock'а
     */
    public function testOnBeforeHighloadBlockAddAndUpdateNoRules(): void
    {
        Events::onBeforeProlog();

        $entity = HighloadBlockTable::compileEntity(static::$hlId2);
        $class = $entity->getDataClass();

        $result = $class::add([
            'UF_FBV_TEST1' => 5,
        ]);

        $this->assertTrue($result->isSuccess());
    }

    /**
     * Удаление правил при удалении свойства инфоблока
     */
    public function testIBlockPropertyDelete(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockPropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(1, $rules);

        CIBlockProperty::Delete(static::$iblockPropertyId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockPropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаление множественных правил при переключении множественности у поля
     */
    public function testIBlockPropertyUpdateMultiple(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
                '=MULTIPLE' => 1,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(1, $rules);

        $ibp = new CIBlockProperty();

        $ibp->Update(static::$iblockMultiplePropertyId, ['MULTIPLE' => 'Y',]);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
                '=MULTIPLE' => 1,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(1, $rules);

        $ibp->Update(static::$iblockMultiplePropertyId, ['MULTIPLE' => 'N',]);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
                '=MULTIPLE' => 1,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаление правил при переключении типа у поля
     */
    public function testIBlockPropertyUpdateNotFound(): void
    {
        $ibp = new CIBlockProperty();
        $ibp->Update(static::$iblockPropertyId, ['PROPERTY_TYPE' => 'S',]);
        $this->assertTrue(true);
    }

    /**
     * Удаление правил при переключении типа у поля
     */
    public function testIBlockPropertyUpdateChangeType(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertGreaterThanOrEqual(1, count($rules));

        $ibp = new CIBlockProperty();

        $ibp->Update(static::$iblockMultiplePropertyId, ['PROPERTY_TYPE' => 'S',]);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
                '=FIELD_ID' => static::$iblockMultiplePropertyId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаление правил при удалении пользовательского поля
     */
    public function testUserTypeDelete(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
                '=FIELD_ID' => static::$userTypeId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(1, $rules);

        $userTypeEntity  = new CUserTypeEntity();
        $userTypeEntity->Delete(static::$userTypeId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
                '=FIELD_ID' => static::$userTypeId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);

        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'HLBLOCK_0',
            'FIELD_NAME' => 'UF_FBV_TEST2',
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
        $userTypeEntity->Delete($userTypeId);

        $userTypeId = $userTypeEntity->Add([
            'ENTITY_ID' => 'UNK',
            'FIELD_NAME' => 'UF_FBV_TEST3',
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
        $userTypeEntity->Delete($userTypeId);
    }

    /**
     * Удаление правил при удалении инфоблока
     */
    public function testIBlockDelete(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertGreaterThanOrEqual(1, count($rules));

        CIBlock::Delete(static::$iblockId);
        CIBlockType::Delete('fbv_test');

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);
    }

    /**
     * Удаление правил при удалении инфоблока
     */
    public function testHightloadblockDelete(): void
    {
        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertGreaterThanOrEqual(1, count($rules));

        HighloadBlockTable::delete(static::$hlId);

        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'hl',
                '=ENTITY_ID' => static::$hlId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $rules);
        $this->assertCount(0, $rules);

        static::$hlId = null;
    }
}
