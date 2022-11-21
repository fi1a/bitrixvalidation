<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Rules\RuleInterface;

/**
 * Группа правил
 */
class Group extends Field implements GroupInterface
{
    /**
     * @var string[]
     */
    protected $modelKeys = [
        'id', 'name', 'type', 'internal_type', 'multiple', 'rules', 'multiple_rules',
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
        if (isset($array['multiple_rules']) && count($array['multiple_rules'])) {
            $fields = [];
            foreach ($array['multiple_rules'] as $rule) {
                assert($rule instanceof RuleInterface);
                $fields[] = $rule->toArray();
            }
            $array['multiple_rules'] = $fields;
        }

        return $array;
    }
}
