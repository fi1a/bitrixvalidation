<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\Validation\ChainInterface;
use InvalidArgumentException;

/**
 * Допустимые значения (строгая проверка значения)
 */
class StrictInRule extends AbstractRule
{
    /**
     * @inheritDoc
     */
    public static function getTypes(): array
    {
        return ['number', 'string'];
    }

    /**
     * @inheritDoc
     */
    public static function getTitle(): string
    {
        return Loc::getMessage('FBV_STRICT_IN_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_STRICT_IN_MESSAGE_DESCRIPTION');
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options): void
    {
        if (!isset($options['in']) || !is_array($options['in']) || !count($options['in'])) {
            throw new InvalidArgumentException('Не передано обязательное значение in');
        }

        $this->modelSet('options', $options);
    }

    /**
     * @inheritDoc
     */
    public function configure(ChainInterface $chain, EntityInterface $entity, GroupInterface $group, $id): void
    {
        $options = $this->getOptions();
        $chain->strictIn(...$options['in']);
    }
}
