<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Highloadblock\HighloadBlockLangTable;
use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Iblock\IblockTable;
use Bitrix\Iblock\TypeLanguageTable;
use Bitrix\Main\Loader;
use Fi1a\BitrixValidation\Domain\EntityCollection;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\HLEntity;
use Fi1a\BitrixValidation\Domain\IBEntity;

/**
 *  Репозиторий сущностей
 */
class EntityRepository implements EntityRepositoryInterface
{
    /**
     * @inheritDoc
     */
    public function getListIB(array $parameters = []): EntityCollectionInterface
    {
        Loader::includeModule('iblock');

        $parameters['select'] = ['ID', 'NAME', 'IBLOCK_TYPE_ID',];

        $iterator = IblockTable::getList($parameters);
        $iblockTypeIds = [];
        $iblocks = [];
        while ($ib = $iterator->fetch()) {
            if (!in_array($ib['IBLOCK_TYPE_ID'], $iblockTypeIds)) {
                $iblockTypeIds[] = $ib['IBLOCK_TYPE_ID'];
            }

            $iblocks[] = $ib;
        }

        $languageTypes = [];
        if (count($iblockTypeIds)) {
            $iterator = TypeLanguageTable::query()
                ->setSelect(['NAME', 'IBLOCK_TYPE_ID', 'LANGUAGE_ID'])
                ->where('LANGUAGE_ID', '=', LANGUAGE_ID)
                ->whereIn('IBLOCK_TYPE_ID', $iblockTypeIds)
                ->exec();

            while ($languageType = $iterator->fetch()) {
                $languageTypes[$languageType['IBLOCK_TYPE_ID']] = $languageType;
            }
        }

        $collection = new EntityCollection();
        foreach ($iblocks as $ib) {
            $ib['IBLOCK_TYPE_NAME'] = '';
            if (isset($languageTypes[$ib['IBLOCK_TYPE_ID']])) {
                $ib['IBLOCK_TYPE_NAME'] = $languageTypes[$ib['IBLOCK_TYPE_ID']]['NAME'];
            }

            $collection[] = $this->factoryIbEntity($ib);
        }

        return $collection;
    }

    /**
     * Фабричный метод
     *
     * @param string[] $ib
     */
    private function factoryIbEntity(array $ib): EntityInterface
    {
        $entity = [
            'entity_type' => 'ib',
            'id' => $ib['ID'],
            'name' => $ib['NAME'],
            'type_name' => $ib['IBLOCK_TYPE_NAME'],
        ];

        return new IBEntity($entity);
    }

    /**
     * @inheritDoc
     */
    public function getListHL(array $parameters = []): EntityCollectionInterface
    {
        Loader::includeModule('highloadblock');

        $parameters['select'] = ['ID', 'NAME',];

        $iterator = HighloadBlockTable::getList($parameters);
        $hls = [];

        while ($hl = $iterator->fetch()) {
            $hls[$hl['ID']] = $hl;
        }

        $languages = [];
        if (count($hls)) {
            $iterator = HighloadBlockLangTable::query()
                ->setSelect(['NAME', 'ID'])
                ->where('LID', '=', LANGUAGE_ID)
                ->whereIn('ID', array_keys($hls))
                ->exec();

            while ($language = $iterator->fetch()) {
                $languages[$language['ID']] = $language;
            }
        }

        $collection = new EntityCollection();

        foreach ($hls as $hl) {
            if (isset($languages[$hl['ID']]) && $languages[$hl['ID']]['NAME']) {
                $hl['NAME'] = $languages[$hl['ID']]['NAME'];
            }
            $collection[] = $this->factoryHlEntity($hl);
        }

        return $collection;
    }

    /**
     * Фабричный метод
     *
     * @param string[] $hl
     */
    private function factoryHlEntity(array $hl): EntityInterface
    {
        $entity = [
            'entity_type' => 'hl',
            'id' => $hl['ID'],
            'name' => $hl['NAME'],
            'type_name' => null,
        ];

        return new HLEntity($entity);
    }
}
