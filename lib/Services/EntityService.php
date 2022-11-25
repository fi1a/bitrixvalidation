<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Services;

use ErrorException;
use Fi1a\BitrixValidation\Models\EntityCollectionInterface;
use Fi1a\BitrixValidation\Models\EntityInterface;
use Fi1a\BitrixValidation\Models\Rules\RuleInterface;
use Fi1a\BitrixValidation\Models\Rules\RuleRegistry;
use Fi1a\BitrixValidation\ORM\RuleTable;
use Fi1a\BitrixValidation\Repositories\EntityRepositoryInterface;
use Fi1a\BitrixValidation\Repositories\EntitySelector;
use Fi1a\BitrixValidation\Repositories\HLEntityRepository;
use Fi1a\BitrixValidation\Repositories\IBEntityRepository;
use Fi1a\BitrixValidation\Repositories\RuleRepository;
use InvalidArgumentException;

/**
 * Сервис сущностей
 */
class EntityService implements EntityServiceInterface
{
    /**
     * @inheritDoc
     */
    public function getListIB(array $parameters = []): EntityCollectionInterface
    {
        return $this->addCountRules($this->factoryRepository('ib')->getList($parameters));
    }

    /**
     * @inheritDoc
     */
    public function getListHL(array $parameters = []): EntityCollectionInterface
    {
        return $this->addCountRules($this->factoryRepository('hl')->getList($parameters));
    }

    /**
     * Добавляет кол-во правил к сущностям
     */
    private function addCountRules(EntityCollectionInterface $collection): EntityCollectionInterface
    {
        $counts = $this->getCountRules($collection);
        foreach ($collection->keys() as $index) {
            $collection[$index]['count_rules'] = 0;
        }
        foreach ($counts as $count) {
            foreach ($collection as $index => $item) {
                if ((int) $item['id'] === (int) $count['entity_id']) {
                    $collection[$index]['count_rules'] = (int) $count['count'];
                }
            }
        }

        return $collection;
    }

    /**
     * @inheritDoc
     */
    public function getEntity(string $type, int $id): EntityInterface
    {
        return $this->factoryRepository($type)->getEntity(
            $id,
            new EntitySelector(true, true)
        );
    }

    /**
     * Фабричный метод
     */
    private function factoryRepository(string $type): EntityRepositoryInterface
    {
        switch ($type) {
            case 'ib':
                return new IBEntityRepository();
            case 'hl':
                return new HLEntityRepository();
        }

        throw new ErrorException(htmlspecialcharsbx(sprintf('Тип "%s" не определен', $type)));
    }

    /**
     * @inheritDoc
     */
    public function saveEntityRules(string $entityType, int $entityId, array $rules): bool
    {
        if (!$entityType) {
            throw new InvalidArgumentException('Аргумент $entityType не может быть пустым');
        }
        if (!$entityId) {
            throw new InvalidArgumentException('Аргумент $entityId не может быть пустым');
        }

        $ruleRepository = new RuleRepository();
        $collection = $ruleRepository->factoryList($rules);

        return $ruleRepository->save($entityType, $entityId, $collection);
    }

    /**
     * @inheritDoc
     */
    public function getRules(): array
    {
        $rules = [];
        foreach (RuleRegistry::all() as $key => $ruleClass) {
            /**
             * @var RuleInterface $ruleClass
             */
            $rules[] = [
                'title' => $ruleClass::getTitle(),
                'messageDescription' => $ruleClass::getMessageDescription(),
                'key' => $key,
                'types' => $ruleClass::getTypes(),
            ];
        }

        return $rules;
    }

    /**
     * @inheritDoc
     */
    public function deleteFieldRules(string $entityType, int $entityId, $fieldId): bool
    {
        if (!$entityType) {
            throw new InvalidArgumentException('Аргумент $entityType не может быть пустым');
        }
        if (!$entityId) {
            throw new InvalidArgumentException('Аргумент $entityId не может быть пустым');
        }
        if (!$fieldId) {
            throw new InvalidArgumentException('Аргумент $fieldId не может быть пустым');
        }

        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => $entityType,
                '=ENTITY_ID' => $entityId,
                '=FIELD_ID' => $fieldId,
            ],
        ]);

        return $ruleRepository->delete($rules);
    }

    /**
     * @inheritDoc
     */
    public function deleteFieldMultipleRules(string $entityType, int $entityId, $fieldId): bool
    {
        if (!$entityType) {
            throw new InvalidArgumentException('Аргумент $entityType не может быть пустым');
        }
        if (!$entityId) {
            throw new InvalidArgumentException('Аргумент $entityId не может быть пустым');
        }
        if (!$fieldId) {
            throw new InvalidArgumentException('Аргумент $fieldId не может быть пустым');
        }

        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => $entityType,
                '=ENTITY_ID' => $entityId,
                '=FIELD_ID' => $fieldId,
                '=MULTIPLE' => 1,
            ],
        ]);

        return $ruleRepository->delete($rules);
    }

    /**
     * @inheritDoc
     */
    public function deleteEntityRules(string $entityType, int $entityId): bool
    {
        if (!$entityType) {
            throw new InvalidArgumentException('Аргумент $entityType не может быть пустым');
        }
        if (!$entityId) {
            throw new InvalidArgumentException('Аргумент $entityId не может быть пустым');
        }

        $ruleRepository = new RuleRepository();
        $rules = $ruleRepository->getList([
            'filter' => [
                '=ENTITY_TYPE' => $entityType,
                '=ENTITY_ID' => $entityId,
            ],
        ]);

        return $ruleRepository->delete($rules);
    }

    /**
     * @inheritDoc
     */
    public function getCountRules(EntityCollectionInterface $collection): array
    {
        $result = [];

        if (!count($collection)) {
            return $result;
        }

        $idsByType = [];

        foreach ($collection as $entity) {
            assert($entity instanceof EntityInterface);
            if (!isset($idsByType[$entity->getEntityType()])) {
                $idsByType[$entity->getEntityType()] = [];
            }
            $idsByType[$entity->getEntityType()][] = $entity->getId();
        }

        foreach ($idsByType as $type => $ids) {
            $filter = [
                '=entity_id' => $ids,
                '=entity_type' => $type,
            ];

            $iterator = RuleTable::query()
                ->registerRuntimeField(
                    'count',
                    [
                        'data_type' => 'integer',
                        'expression' => ['count(%s)', 'ID'],
                    ]
                )
                ->setSelect(['count', 'entity_id', 'entity_type'])
                ->setFilter($filter)
                ->setGroup(['entity_id', 'entity_type'])
                ->exec();

            while ($item = $iterator->fetch()) {
                $result[] = [
                    'count' => $item['count'],
                    'entity_id' => $item['ENTITY_ID'],
                    'entity_type' => $item['ENTITY_TYPE'],
                ];
            }
        }

        return $result;
    }
}
