<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

use Bitrix\Main\Localization\Loc;
use InvalidArgumentException;

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

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['min'])) {
            throw new InvalidArgumentException('Не передано обязательное значение min');
        }
        if (!is_numeric($options['min'])) {
            throw new InvalidArgumentException('Значение min должно быть числом');
        }

        $this->modelSet('options', $options);
    }
}
