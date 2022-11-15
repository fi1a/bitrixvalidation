<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Bitrix\Main\Localization\Loc;
use Fi1a\Collection\DataType\IValueObject;

/**
 * Сущность "Инфоблок"
 */
class IBEntity extends AbstractEntity
{
    /**
     * @inheritDoc
     */
    public function fromArray($input): IValueObject
    {
        $input['entity_type_name'] = Loc::getMessage('FBV_IB');

        return parent::fromArray($input);
    }

    /**
     * @inheritDoc
     */
    public function getEntityTypeName(): string
    {
        return Loc::getMessage('FBV_IB');
    }
}
