<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Model\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

use const FILTER_VALIDATE_INT;

/**
 * Проверка на максимальную длину строки
 */
class MaxLengthRule extends AbstractRule
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
        return Loc::getMessage('FBV_MAX_LENGTH_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_MAX_LENGTH_MESSAGE_DESCRIPTION');
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

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain): void
    {
        $options = $this->getOptions();
        $chain->maxLength($options['max']);
    }
}
