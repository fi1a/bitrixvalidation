<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Repositories;

use Fi1a\BitrixValidation\Models\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\Models\Rules\RuleInterface;

/**
 *  Репозиторий правил
 */
interface RuleRepositoryInterface
{
    /**
     * Возвращает коллекцию правил
     *
     * @param string[][] $parameters
     */
    public function getList(array $parameters = []): RuleCollectionInterface;

    /**
     * Фабричный метод. Возвращает коллекцию правил
     *
     * @param mixed[][] $rules
     */
    public function factoryList(array $rules): RuleCollectionInterface;

    /**
     * Фабричный метод. Возвращает правило
     *
     * @param mixed[] $rule
     */
    public function factory(array $rule): RuleInterface;

    /**
     * Сохранение коллекции правил
     */
    public function save(string $entityType, int $entityId, RuleCollectionInterface $rules): bool;

    /**
     * Удаление правил
     */
    public function delete(RuleCollectionInterface $rules): bool;
}
