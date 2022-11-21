<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rules;

use Bitrix\Main\Localization\Loc;
use InvalidArgumentException;

use const FILTER_VALIDATE_INT;

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

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['max'])) {
            throw new InvalidArgumentException('Не передано обязательное значение max');
        }
        if (filter_var($options['max'], FILTER_VALIDATE_INT) === false || (int) $options['max'] < 0) {
            throw new InvalidArgumentException('Значение max должно быть положительным числом или 0');
        }
        $options['max'] = (int) $options['max'];

        $this->modelSet('options', $options);
    }
}
