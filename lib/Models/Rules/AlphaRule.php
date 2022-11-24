<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\Validation\ChainInterface;

/**
 * Является ли значение только буквенным(без чисел)
 */
class AlphaRule extends AbstractRule
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
        return Loc::getMessage('FBV_ALPHA_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_ALPHA_MESSAGE_DESCRIPTION');
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
        $chain->alpha();
    }
}
