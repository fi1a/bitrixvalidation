<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain\Rule;

use InvalidArgumentException;

/**
 * Реестр правил
 */
class RuleRegistry implements RuleRegistryInterface
{
    /**
     * @var string[]
     */
    private static $rules = [];

    /**
     * @inheritDoc
     */
    public static function add(string $key, string $rule): bool
    {
        if (static::has($key)) {
            return false;
        }

        static::$rules[mb_strtolower($key)] = $rule;

        return true;
    }

    /**
     * @inheritDoc
     */
    public static function has(string $key): bool
    {
        return array_key_exists(mb_strtolower($key), static::$rules);
    }

    /**
     * @inheritDoc
     */
    public static function get(string $key): string
    {
        if (!static::has($key)) {
            throw new InvalidArgumentException(
                sprintf('Неизвестное правило "%s"', htmlspecialcharsbx($key))
            );
        }

        return static::$rules[mb_strtolower($key)];
    }

    /**
     * @inheritDoc
     */
    public static function delete(string $key): bool
    {
        if (!static::has($key)) {
            return false;
        }

        unset(static::$rules[mb_strtolower($key)]);

        return true;
    }

    /**
     * @inheritDoc
     */
    public static function all(): array
    {
        return static::$rules;
    }
}
