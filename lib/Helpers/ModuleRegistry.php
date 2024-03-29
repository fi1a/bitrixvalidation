<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Helpers;

use CMain;

/**
 * Реестр
 */
class ModuleRegistry
{
    /**
     * @var \CMain
     */
    protected static $application;

    /**
     * Конструктор
     */
    public static function configure(CMain $application)
    {
        static::$application = $application;
    }

    /**
     * Возвращает \CMain
     */
    public static function getApplication(): CMain
    {
        return static::$application;
    }

    /**
     * Возвращает значение из $GLOBALS
     *
     * @return mixed
     */
    public static function getGlobals(string $key)
    {
        // phpcs:ignore SlevomatCodingStandard.Variables.DisallowSuperGlobalVariable.DisallowedSuperGlobalVariable
        return $GLOBALS[$key];
    }

    /**
     * Устанавливает значение в $GLOBALS
     *
     * @param mixed $value
     *
     * @return mixed
     */
    public static function setGlobals(string $key, $value): void
    {
        // phpcs:ignore SlevomatCodingStandard.Variables.DisallowSuperGlobalVariable.DisallowedSuperGlobalVariable
        $GLOBALS[$key] = $value;
    }
}
