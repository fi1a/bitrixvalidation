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
    public function getListIB(): EntityCollectionInterface
    {
        Loader::includeModule('iblock');
        $collection = new EntityCollection(EntityInterface::class);

        $languageTypes = [];
        $iterator = TypeLanguageTable::query()
            ->setSelect(['NAME', 'IBLOCK_TYPE_ID', 'LANGUAGE_ID'])
            ->where('LANGUAGE_ID', '=', LANGUAGE_ID)
            ->exec();

        while ($languageType = $iterator->fetch()) {
            $languageTypes[$languageType['IBLOCK_TYPE_ID']] = $languageType;
        }

        $iterator = IblockTable::query()
            ->setSelect(['ID', 'NAME', 'IBLOCK_TYPE_ID',])
            ->exec();

        while ($ib = $iterator->fetch()) {
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
    public function getListHL(): EntityCollectionInterface
    {
        Loader::includeModule('highloadblock');
        $collection = new EntityCollection(EntityInterface::class);

        $languages = [];
        $iterator = HighloadBlockLangTable::query()
            ->setSelect(['NAME', 'ID'])
            ->where('LID', '=', LANGUAGE_ID)
            ->exec();

        while ($language = $iterator->fetch()) {
            $languages[$language['ID']] = $language;
        }

        $iterator = HighloadBlockTable::query()
            ->setSelect(['ID', 'NAME'])
            ->exec();

        while ($hl = $iterator->fetch()) {
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
