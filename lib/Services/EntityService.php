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
    public function getListIB(array $parameters = []): array
    {
        return (new EntityRepository())->getListIB($parameters)->toArray();
    }

    /**
     * @inheritDoc
     */
    public function getListHL(array $parameters = []): array
    {
        return (new EntityRepository())->getListHL($parameters)->toArray();
    }
}
