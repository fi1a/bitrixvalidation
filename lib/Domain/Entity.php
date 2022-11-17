<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\DataType\ValueObject;

/**
 *  Абстрактная сущность
 */
class Entity extends ValueObject implements EntityInterface
{
    /**
     * @var string[]
     */
    protected $modelKeys = [
        'entity_type', 'entity_type_name', 'id', 'name', 'type_name', 'fields', 'groups',
    ];

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = parent::toArray();
        if (isset($array['fields']) && count($array['fields'])) {
            $fields = [];
            foreach ($array['fields'] as $field) {
                $fields[] = $field->toArray();
            }
            $array['fields'] = $fields;
        }

        return $array;
    }
}
