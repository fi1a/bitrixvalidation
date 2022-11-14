<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Services;

use Fi1a\BitrixValidation\Repositories\EntityRepository;

/**
 * Сервис сущностей
 */
class EntityService implements EntityServiceInterface
{
    /**
     * @inheritDoc
     */
    public function getListIB(): array
    {
        return (new EntityRepository())->getListIB()->toArray();
    }

    /**
     * @inheritDoc
     */
    public function getListHL(): array
    {
        return (new EntityRepository())->getListHL()->toArray();
    }
}
