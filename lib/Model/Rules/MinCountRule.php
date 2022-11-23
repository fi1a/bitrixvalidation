<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

use const FILTER_VALIDATE_INT;

/**
 * Проверка на минимальное количество значений в массиве
 */
class MinCountRule extends AbstractRule
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
        return Loc::getMessage('FBV_MIN_COUNT_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_MIN_COUNT_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['min']) || !is_numeric($options['min'])) {
            throw new InvalidArgumentException('Не передано обязательное значение min');
        }
        if (filter_var($options['min'], FILTER_VALIDATE_INT) === false || (int) $options['min'] < 0) {
            throw new InvalidArgumentException('Значение min должно быть положительным числом или 0');
        }
        $options['min'] = (int) $options['min'];

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain): void
    {
        $options = $this->getOptions();
        $chain->minCount($options['min']);
    }
}
