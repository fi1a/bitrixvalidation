<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

/**
 * Группа правил
 */
class Group extends Field implements GroupInterface
{
    /**
     * @var string[]
     */
    protected $modelKeys = [
        'id', 'name', 'type', 'internal_type', 'multiple', 'rules',
    ];

    /**
     * @inheritDoc
     */
    public function toArray(): array
    {
        $array = parent::toArray();
        if (isset($array['rules']) && count($array['rules'])) {
            $fields = [];
            foreach ($array['rules'] as $rule) {
                assert($rule instanceof RuleInterface);
                $fields[] = $rule->toArray();
            }
            $array['rules'] = $fields;
        }

        return $array;
    }
}
