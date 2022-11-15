<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Services;

use ErrorException;
use Fi1a\BitrixValidation\Domain\EntityCollectionInterface;
use Fi1a\BitrixValidation\Domain\EntityInterface;
use Fi1a\BitrixValidation\Repositories\EntityRepositoryInterface;
use Fi1a\BitrixValidation\Repositories\EntitySelect;
use Fi1a\BitrixValidation\Repositories\HLEntityRepository;
use Fi1a\BitrixValidation\Repositories\IBEntityRepository;

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
        return $this->factoryRepository('ib')->getList($parameters);
    }

    /**
     * @inheritDoc
     */
    public function getListHL(array $parameters = []): EntityCollectionInterface
    {
        return $this->factoryRepository('hl')->getList($parameters);
    }

    /**
     * @inheritDoc
     */
    public function getEntity(string $type, int $id): EntityInterface
    {
        return $this->factoryRepository($type)->getEntity($id, new EntitySelect(true));
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
}
