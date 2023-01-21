<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

/**
 * Проверяет дату на равенство
 */
class EqualDateRule extends AbstractRule
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
        return Loc::getMessage('FBV_EQUAL_DATE_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_EQUAL_DATE_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['equalDate'])) {
            throw new InvalidArgumentException('Не передано обязательное значение equalDate');
        }
        if (!isset($options['format'])) {
            $options['format'] = null;
        }

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain, EntityInterface $entity, GroupInterface $group, $id): void
    {
        $options = $this->getOptions();
        $chain->equalDate($options['equalDate'], $options['format']);
    }
}
