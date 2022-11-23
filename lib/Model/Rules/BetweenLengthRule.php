<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

use const FILTER_VALIDATE_INT;

/**
 * Проверка на максимальную и минимальную длину строки
 */
class BetweenLengthRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['string'];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_BETWEEN_LENGTH_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_BETWEEN_LENGTH_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['min'])) {
            throw new InvalidArgumentException('Не передано обязательное значение min');
        }
        if (filter_var($options['min'], FILTER_VALIDATE_INT) === false || (int) $options['min'] < 0) {
            throw new InvalidArgumentException('Значение min должно быть положительным числом или 0');
        }
        $options['min'] = (int) $options['min'];
        if (!isset($options['max'])) {
            throw new InvalidArgumentException('Не передано обязательное значение max');
        }
        if (filter_var($options['max'], FILTER_VALIDATE_INT) === false || (int) $options['max'] < 0) {
            throw new InvalidArgumentException('Значение max должно быть положительным числом или 0');
        }
        $options['max'] = (int) $options['max'];

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain): void
    {
        $options = $this->getOptions();
        $chain->betweenLength($options['min'], $options['max']);
    }
}
