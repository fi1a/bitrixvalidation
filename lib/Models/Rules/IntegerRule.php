<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;

/**
 * Является ли значение целым числом
 */
class IntegerRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['string', 'number'];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_INTEGER_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_INTEGER_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain): void
    {
        $chain->integer();
    }
}
