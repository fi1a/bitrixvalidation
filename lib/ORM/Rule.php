<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ORM;

use Bitrix\Main\ORM\Objectify\EntityObject;

/**
 * Правило
 */
class Rule extends EntityObject
{
    public static $dataClass = RuleTable::class;
}
