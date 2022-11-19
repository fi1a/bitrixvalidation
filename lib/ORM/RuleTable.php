<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ORM;

use Bitrix\Main\Entity\DataManager;
use Bitrix\Main\ORM\Fields\BooleanField;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

/**
 * Правила
 *
 * @codeCoverageIgnore
 */
class RuleTable extends DataManager
{
    /**
     * @inheritDoc
     */
    public static function getTableName(): string
    {
        return 'fbv_rules';
    }

    /**
     * @inheritDoc
     */
    public static function getMap(): array
    {
        return [
            'ID' => new IntegerField('ID', [
                'primary' => true,
                'autocomplete' => true,
            ]),
            'KEY' => new StringField('KEY', [
                'required' => true,
            ]),
            'OPTIONS' => new StringField('OPTIONS', [
                'required' => true,
            ]),
            'SORT' => new IntegerField('SORT', [
                'default' => 500,
            ]),
            'FIELD_ID' => new StringField('FIELD_ID', [
                'required' => true,
            ]),
            'ENTITY_TYPE' => new StringField('ENTITY_TYPE', [
                'required' => true,
            ]),
            'ENTITY_ID' => new IntegerField('ENTITY_ID', [
                'required' => true,
            ]),
            'MULTIPLE' => new BooleanField('MULTIPLE', [
                'values' => [0, 1],
            ]),
        ];
    }

    /**
     * @inheritDoc
     */
    public static function getObjectClass(): string
    {
        return Rule::class;
    }
}
