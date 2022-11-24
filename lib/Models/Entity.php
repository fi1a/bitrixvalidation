<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models;

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
                assert($field instanceof FieldInterface);
                $fields[] = $field->toArray();
            }
            $array['fields'] = $fields;
        }
        if (isset($array['groups']) && count($array['groups'])) {
            $groups = [];
            foreach ($array['groups'] as $group) {
                assert($group instanceof GroupInterface);
                $groups[] = $group->toArray();
            }
            $array['groups'] = $groups;
        }

        return $array;
    }
}
