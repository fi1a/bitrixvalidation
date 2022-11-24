<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

/**
 * Проверка на максимальное и мимальное значение
 */
class BetweenRule extends AbstractRule
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
        return Loc::getMessage('FBV_BETWEEN_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_BETWEEN_MESSAGE_DESCRIPTION');
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
        if (!isset($options['max'])) {
            throw new InvalidArgumentException('Не передано обязательное значение max');
        }
        if (!is_numeric($options['max'])) {
            throw new InvalidArgumentException('Значение max должно быть числом');
        }
        if ($options['min'] > $options['max']) {
            throw new InvalidArgumentException('Значение max должен быть больше min');
        }

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain): void
    {
        $options = $this->getOptions();
        $chain->between($options['min'], $options['max']);
    }
}
