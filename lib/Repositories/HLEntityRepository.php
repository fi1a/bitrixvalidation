<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Bitrix\Highloadblock\HighloadBlockLangTable;
use Bitrix\Highloadblock\HighloadBlockTable;
use Bitrix\Main\Loader;
use Fi1a\BitrixValidation\Domain\EntityCollection;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Domain\HLEntity;

/**
 *  Репозиторий сущностей
 */
class HLEntityRepository extends AbstractEntityRepository
{
    /**
     * @inheritDoc
     */
    public function getList(array $parameters = []): EntityCollectionInterface
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
            'id' => $hl['ID'],
            'name' => $hl['NAME'],
            'type_name' => null,
        ];

        return new HLEntity($entity);
    }
}
