<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\DataType\IValueObject;

/**
 * Сущность "Инфоблок"
 */
class IBEntity extends Entity
{
    /**
     * @inheritDoc
     */
    public function fromArray($input): IValueObject
    {
        $input['entity_type_name'] = 'Инфоблок';

        return parent::fromArray($input);
    }

    /**
     * @inheritDoc
     */
    public function getEntityTypeName(): string
    {
        return 'Инфоблок';
    }
}
