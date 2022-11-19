<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

use Bitrix\Main\Localization\Loc;

/**
 * Проверка на максимальное количество значений в массиве
 */
class MaxCountRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['multiple'];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_MAX_COUNT_TITLE');
    }
}
