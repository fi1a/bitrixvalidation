<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

use Bitrix\Main\Localization\Loc;

/**
 * Проверка на минимальное значение
 */
class MinRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['number'];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_MIN_TITLE');
    }
}
