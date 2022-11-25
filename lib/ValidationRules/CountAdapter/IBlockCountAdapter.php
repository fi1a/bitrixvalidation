<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ValidationRules\CountAdapter;

use Bitrix\Main\Loader;
use CIBlockElement;

/**
 * Адаптер для инфоблоков
 */
class IBlockCountAdapter implements CountAdapterInterface
{
    /**
     * @var int
     */
    private $iblockId;

    /**
     * @inheritDoc
     */
    public function __construct(int $iblockId)
    {
        $this->iblockId = $iblockId;
    }

    /**
     * @inheritDoc
     */
    public function getCount(array $filter): int
    {
        Loader::includeModule('iblock');

        $filter['IBLOCK_ID'] = $this->iblockId;

        return (int) CIBlockElement::GetList([], $filter, []);
    }
}
