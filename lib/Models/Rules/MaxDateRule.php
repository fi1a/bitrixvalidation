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
 * Максимальная дата
 */
class MaxDateRule extends AbstractRule
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
        return Loc::getMessage('FBV_MAX_DATE_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_MAX_DATE_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
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
        $maxDate = DateTime::createFromFormat($format, $options['maxDate']);
        if ($maxDate === false) {
            throw new InvalidArgumentException('maxDate имеет неверный формат даты');
        }

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain, EntityInterface $entity, GroupInterface $group, $id): void
    {
        $options = $this->getOptions();
        $chain->maxDate($options['maxDate'], $options['format']);
    }
}
