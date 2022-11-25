<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models\Rules;

use Bitrix\Highloadblock\HighloadBlock;
use Bitrix\Main\Localization\Loc;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\GroupInterface;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\IBlockCountAdapter;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\ORMCountAdapter;
use Fi1a\Validation\ChainInterface;
use LogicException;

/**
 * Уникальное значение
 */
class UniqueRule extends AbstractRule
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
        return Loc::getMessage('FBV_UNIQUE_TITLE');
    }

    /**
     * @inheritDoc
     */
    public static function getMessageDescription(): string
    {
        return Loc::getMessage('FBV_UNIQUE_MESSAGE_DESCRIPTION');
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
        $adapter = null;
        $column = null;

        switch ($entity->getEntityType()) {
            case 'ib':
                $adapter = new IBlockCountAdapter((int) $entity->getId());
                $column = $group->getId();
                if ($group->getInternalType() === 'property') {
                    $column = 'PROPERTY_' . $column;
                }

                break;
            case 'hl':
                $adapter = new ORMCountAdapter(HighloadBlock::wakeUp($entity->getId())->getEntityDataClass());
                $ufField = CUserTypeEntity::GetByID($group->getId());
                $column = $ufField['FIELD_NAME'];

                break;
        }

        if (!$adapter || !$column) {
            throw new LogicException();
        }

        $chain->unique($adapter, $column, $id);
    }
}
