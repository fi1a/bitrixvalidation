<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\Validation\ChainInterface;

/**
 * Проверка url адреса
 */
class UrlRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['string',];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_URL_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_URL_MESSAGE_DESCRIPTION');
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
    public function configure(ChainInterface $chain, EntityInterface $entity, GroupInterface $group, $id): void
    {
        $chain->url();
    }
}
