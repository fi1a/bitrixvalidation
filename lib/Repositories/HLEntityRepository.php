<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Highloadblock\HighloadBlockLangTable;
use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use CUserTypeEntity;
use Fi1a\BitrixValidation\Domain\Entity;
use Fi1a\BitrixValidation\Domain\EntityCollection;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;

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
            $hl['FIELDS'] = [];
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
                        'id' => $field['FIELD_NAME'],
                        'name' => $field['EDIT_FORM_LABEL'] . ' (' . $field['FIELD_NAME'] . ')',
                        'type' => $this->mapType($field['USER_TYPE_ID']),
                        'internal_type' => 'field',
                        'multiple' => $field['MULTIPLE'] === 'Y',
                    ]);
                }
            }
            $hl['GROUPS'] = [];
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
            'groups' => [],
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
