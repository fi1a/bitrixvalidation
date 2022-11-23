<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Highloadblock\HighloadBlockLangTable;
use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Model\Entity;
use Fi1a\BitrixValidation\Model\EntityCollection;
use Fi1a\BitrixValidation\Model\EntityCollectionInterface;
use Fi1a\BitrixValidation\Model\EntityInterface;
use Fi1a\BitrixValidation\Model\FieldCollection;
use Fi1a\BitrixValidation\Model\GroupCollection;

/**
 *  Репозиторий сущностей
 */
class HLEntityRepository extends AbstractEntityRepository
{
    /**
     * @var string[]
     */
    private $mapTypes = [
        'string' => 'string',
        'integer' => 'number',
        'double' => 'number',
        'address' => 'string',
        'date' => 'date',
        'datetime' => 'date',
        'url' => 'string',
    ];

    /**
     * @inheritDoc
     */
    public function getList(array $parameters = [], ?EntitySelectInterface $select = null): EntityCollectionInterface
    {
        if (!$select) {
            $select = new EntitySelect();
        }
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
            $hl['FIELDS'] = new FieldCollection();
            if ($select->isSelectFields()) {
                $iterator = CUserTypeEntity::GetList([], [
                    'ENTITY_ID' => 'HLBLOCK_' . $hl['ID'],
                    'LANG' => LANGUAGE_ID,
                ]);
                while ($field = $iterator->Fetch()) {
                    if (!array_key_exists($field['USER_TYPE_ID'], $this->mapTypes)) {
                        continue;
                    }
                    $hl['FIELDS'][] = $this->factoryField([
                        'id' => $field['ID'],
                        'name' => trim($field['EDIT_FORM_LABEL'] . ' (' . $field['FIELD_NAME'] . ')'),
                        'title' => $field['EDIT_FORM_LABEL'] ?: $field['FIELD_NAME'],
                        'type' => $this->mapType($field['USER_TYPE_ID']),
                        'internal_type' => 'field',
                        'multiple' => $field['MULTIPLE'] === 'Y',
                    ]);
                }
            }
            $hl['GROUPS'] = new GroupCollection();
            if ($select->isSelectGroups() && $select->isSelectFields()) {
                $hl['GROUPS'] = $this->getGroups('hl', (int) $hl['ID'], $hl['FIELDS']);
            }
            $collection[] = $this->factoryEntity($hl);
        }

        return $collection;
    }

    /**
     * Фабричный метод
     *
     * @param string[] $hl
     */
    private function factoryEntity(array $hl): EntityInterface
    {
        $entity = [
            'entity_type' => 'hl',
            'entity_type_name' => Loc::getMessage('FBV_HL'),
            'id' => $hl['ID'],
            'name' => $hl['NAME'],
            'type_name' => null,
            'fields' => $hl['FIELDS'],
            'groups' => $hl['GROUPS'],
        ];

        return new Entity($entity);
    }

    /**
     * Типы
     */
    private function mapType(string $type): string
    {
        return $this->mapTypes[$type];
    }
}
