<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Events;

use Bitrix\Highloadblock\HighloadBlockTable;
use CIBlock;
use CIBlockProperty;
use CIBlockType;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\Repositories\RuleRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * События
 */
class EventsTest extends EntityTestCase
{
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
    public function testIBlockPropertyUpdate(): void
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
        $this->assertCount(2, $rules);

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
        $this->assertCount(1, $rules);

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
