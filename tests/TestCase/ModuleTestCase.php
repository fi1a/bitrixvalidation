<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\TestCase;

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use CIBlock;
use CModule;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;
use PHPUnit\Framework\TestCase;

use function ExecuteModuleEventEx;
use function GetModuleEvents;

/**
 * Тесты модуля
 */
class ModuleTestCase extends TestCase
{
    protected const MODULE_ID = 'fi1a.bitrixvalidation';

    /**
     * @var bool
     */
    private static $isInstalled = false;

    /**
     * @var int
     */
    private static $iblockId;

    /**
     * @var int
     */
    private static $hlId;

    /**
     * До начала вызова тестов
     */
    public static function setUpBeforeClass(): void
    {
        $module = CModule::CreateModuleObject(self::MODULE_ID);
        if (!$module->IsInstalled()) {
            self::$isInstalled = true;
            $connection = Application::getConnection();
            if (
                strtolower($connection->getType()) === 'mysql'
                && defined('MYSQL_TABLE_TYPE')
                && strlen(MYSQL_TABLE_TYPE) > 0
            ) {
                try {
                    $connection->queryExecute('SET storage_engine = "' . MYSQL_TABLE_TYPE . '"');
                } catch (\Throwable $exception) {
                    $connection->queryExecute('SET default_storage_engine = "' . MYSQL_TABLE_TYPE . '"');
                }
            }
            foreach (GetModuleEvents('main', 'OnModuleInstalled', true) as $arEvent) {
                ExecuteModuleEventEx($arEvent, [self::MODULE_ID, true]);
            }
            if ($module->DoInstall() === false) {
                $application = ModuleRegistry::getGlobals('APPLICATION');

                throw new \ErrorException(
                    $application->GetException()->GetString() ?: 'Can\'t install module.'
                );
            }
        }

        Loader::includeModule(self::MODULE_ID);
        Loader::includeModule('iblock');
        Loader::includeModule('highloadblock');

        $ib = new CIBlock();
        static::$iblockId = $ib->Add([
            'ACTIVE' => 'Y',
            'NAME' => 'BitrixValidation Test',
            'CODE' => 'BITRIXVALIDATION_TEST',
            'LIST_PAGE_URL' => '',
            'DETAIL_PAGE_URL' => '',
            'IBLOCK_TYPE_ID' => '',
            'SITE_ID' => ['s1'],
            'SORT' => 100,
            'PICTURE' => null,
            'DESCRIPTION' => null,
            'DESCRIPTION_TYPE' => null,
            'GROUP_ID' => [],
        ]);
    }

    /**
     * После вызова тестов
     */
    public static function tearDownAfterClass(): void
    {
        if (static::$iblockId) {
            CIBlock::Delete(static::$iblockId);
        }
        if (self::$isInstalled) {
            $module = CModule::CreateModuleObject(self::MODULE_ID);
            if ($module->IsInstalled()) {
                foreach (GetModuleEvents('main', 'OnModuleInstalled', true) as $arEvent) {
                    ExecuteModuleEventEx($arEvent, [self::MODULE_ID, false]);
                }
                if ($module->DoUninstall() === false) {
                    throw new \ErrorException('Can\'t uninstall module');
                }
            }
        }
    }
}
