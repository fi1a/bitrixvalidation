<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rules;

use Bitrix\Main\Localization\Loc;
use InvalidArgumentException;

/**
 * Проверка на максимальное значение
 */
class MaxRule extends AbstractRule
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
        return Loc::getMessage('FBV_MAX_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_MAX_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['max'])) {
            throw new InvalidArgumentException('Не передано обязательное значение max');
        }
        if (!is_numeric($options['max'])) {
            throw new InvalidArgumentException('Значение max должно быть числом');
        }

        $this->modelSet('options', $options);
    }
}
