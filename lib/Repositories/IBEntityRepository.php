<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Iblock\IblockTable;
use Bitrix\Iblock\PropertyTable;
use Bitrix\Iblock\TypeLanguageTable;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Domain\Entity;
use Fi1a\BitrixValidation\Domain\EntityCollection;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;

/**
 *  Репозиторий сущностей
 */
class IBEntityRepository extends AbstractEntityRepository
{
    /**
     * @var string[][]
     */
    private $baseFields;

    /**
     * @inheritDoc
     */
    public function __construct()
    {
        $this->baseFields = [
            [
                'id' => 'NAME',
                'name' => Loc::getMessage('FBV_FIELD_NAME'),
                'type' => 'S',
                'internal_type' => 'field',
            ],
            [
                'id' => 'CODE',
                'name' => Loc::getMessage('FBV_FIELD_CODE'),
                'type' => 'S',
                'internal_type' => 'field',
            ],
            [
                'id' => 'PREVIEW_TEXT',
                'name' => Loc::getMessage('FBV_FIELD_PREVIEW_TEXT'),
                'type' => 'S',
                'internal_type' => 'field',
            ],
            [
                'id' => 'DETAIL_TEXT',
                'name' => Loc::getMessage('FBV_FIELD_DETAIL_TEXT'),
                'type' => 'S',
                'internal_type' => 'field',
            ],
        ];
    }

    /**
     * @inheritDoc
     */
    public function getList(array $parameters = [], ?EntitySelectInterface $select = null): EntityCollectionInterface
    {
        if (!$select) {
            $select = new EntitySelect();
        }
        Loader::includeModule('iblock');

        $parameters['select'] = ['ID', 'NAME', 'IBLOCK_TYPE_ID',];

        $iterator = IblockTable::getList($parameters);
        $iblockTypeIds = [];
        $iblockIds = [];
        $iblocks = [];
        while ($ib = $iterator->fetch()) {
            if (!in_array($ib['IBLOCK_TYPE_ID'], $iblockTypeIds)) {
                $iblockTypeIds[] = $ib['IBLOCK_TYPE_ID'];
            }
            $iblockIds[] = (int) $ib['ID'];

            $iblocks[] = $ib;
        }

        $typeLanguages = [];
        if (count($iblockTypeIds)) {
            $typeLanguages = $this->getTypeLanguages($iblockTypeIds);
        }

        $properties = [];
        if ($select->isSelectFields() && count($iblockIds)) {
            $properties = $this->getProperties($iblockIds);
        }

        $collection = new EntityCollection();
        foreach ($iblocks as $ib) {
            $ib['IBLOCK_TYPE_NAME'] = '';
            if (isset($typeLanguages[$ib['IBLOCK_TYPE_ID']])) {
                $ib['IBLOCK_TYPE_NAME'] = $typeLanguages[$ib['IBLOCK_TYPE_ID']]['NAME'];
            }
            $ib['FIELDS'] = null;
            if ($select->isSelectFields()) {
                $ib['FIELDS'] = $this->baseFields;
                foreach ($properties as $property) {
                    if ((int) $property['IBLOCK_ID'] === (int) $ib['ID']) {
                        $ib['FIELDS'][] = [
                            'id' => $property['ID'],
                            'name' => Loc::getMessage('FBV_PROPERTY') . ': '
                                . $property['NAME'] . ' (' . $property['CODE'] . ')',
                            'type' => $property['PROPERTY_TYPE'],
                            'internal_type' => 'property',
                        ];
                    }
                }
            }
            $collection[] = $this->factoryEntity($ib);
        }

        return $collection;
    }

    /**
     * Возвращает название типов ИБ для текущего языка
     *
     * @param int[] $iblockTypeIds
     *
     * @return string[][]
     *
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\ObjectPropertyException
     * @throws \Bitrix\Main\SystemException
     */
    private function getTypeLanguages(array $iblockTypeIds): array
    {
        $languageTypes = [];
        $iterator = TypeLanguageTable::query()
            ->setSelect(['NAME', 'IBLOCK_TYPE_ID', 'LANGUAGE_ID'])
            ->where('LANGUAGE_ID', '=', LANGUAGE_ID)
            ->whereIn('IBLOCK_TYPE_ID', $iblockTypeIds)
            ->exec();

        while ($languageType = $iterator->fetch()) {
            $languageTypes[$languageType['IBLOCK_TYPE_ID']] = $languageType;
        }

        return $languageTypes;
    }

    /**
     * Возвращает свойства ИБ
     *
     * @param int[] $iblockIds
     *
     * @return string[][]
     *
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\ObjectPropertyException
     * @throws \Bitrix\Main\SystemException
     */
    private function getProperties(array $iblockIds): array
    {
        return PropertyTable::query()
            ->setSelect(['ID', 'NAME', 'CODE', 'PROPERTY_TYPE', 'IBLOCK_ID'])
            ->whereIn('IBLOCK_ID', $iblockIds)
            ->exec()
            ->fetchAll();
    }

    /**
     * Фабричный метод
     *
     * @param string[] $ib
     */
    private function factoryEntity(array $ib): EntityInterface
    {
        $entity = [
            'entity_type' => 'ib',
            'entity_type_name' => Loc::getMessage('FBV_IB'),
            'id' => $ib['ID'],
            'name' => $ib['NAME'],
            'type_name' => $ib['IBLOCK_TYPE_NAME'],
            'fields' => $ib['FIELDS'],
        ];

        return new Entity($entity);
    }
}
