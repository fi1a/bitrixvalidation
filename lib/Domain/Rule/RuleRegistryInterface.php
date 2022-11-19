<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

/**
 * Реестр правил
 */
interface RuleRegistryInterface
{
    /**
     * Добавить правило
     */
    public static function add(string $key, string $rule): bool;

    /**
     * Проверяет наличие правила в коллекции
     */
    public static function has(string $key): bool;

    /**
     * Возвращает правило
     */
    public static function get(string $key): string;

    /**
     * Удаляет правило
     */
    public static function delete(string $key): bool;

    /**
     * Возврщает все правила
     *
     * @return string[]
     */
    public static function all(): array;
}
