<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use DateTime;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

/**
 * Максимальная и минимальная дата
 */
class BetweenDateRule extends AbstractRule
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
        return Loc::getMessage('FBV_BETWEEN_DATE_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_BETWEEN_DATE_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['minDate'])) {
            throw new InvalidArgumentException('Не передано обязательное значение minDate');
        }
        if (!isset($options['maxDate'])) {
            throw new InvalidArgumentException('Не передано обязательное значение maxDate');
        }
        if (!isset($options['format'])) {
            $options['format'] = null;
        }
        $format = 'd.m.Y H:i:s';
        if ($options['format']) {
            $format = $options['format'];
        }
        $minDate = DateTime::createFromFormat($format, $options['minDate']);
        if ($minDate === false) {
            throw new InvalidArgumentException('minDate имеет неверный формат даты');
        }
        $maxDate = DateTime::createFromFormat($format, $options['maxDate']);
        if ($maxDate === false) {
            throw new InvalidArgumentException('maxDate имеет неверный формат даты');
        }
        if ($maxDate->getTimestamp() < $minDate->getTimestamp()) {
            throw new InvalidArgumentException('minDate должно быть больше или равно maxDate');
        }

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain, EntityInterface $entity, GroupInterface $group, $id): void
    {
        $options = $this->getOptions();
        $chain->betweenDate($options['minDate'], $options['maxDate'], $options['format']);
    }
}
