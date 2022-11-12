<?php

use Bitrix\Main\Application;
use Bitrix\Main\Config\Option;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ModuleManager;

Loc::loadMessages(__FILE__);

/**
 * Инсталятор модуля
 */
class fi1a_bitrixvalidation extends CModule
{

    var $MODULE_NAME;
    var $MODULE_ID = 'fi1a.bitrixvalidation';
    var $MODULE_DESCRIPTION;
    var $MODULE_VERSION;
    var $MODULE_VERSION_DATE;
    var $PARTNER_NAME;
    var $PARTNER_URI;
    var $MODULE_GROUP_RIGHTS;

    /**
     * @var string
     */
    private $moduleDir = null;

    /**
     * @var string
     */
    private $bitrixAdminDir = null;

    /**
     * Конструктор
     */
    public function __construct()
    {
        $this->initId();
        $this->initVersion();
        $this->initName();
        $this->initGroupRights();
        $this->initDescription();
        $this->initPartnerInfo();

        $this->moduleDir = $this->createPath(Application::getDocumentRoot(), 'local', 'modules', $this->MODULE_ID);
        if (!is_dir($this->moduleDir)) {
            $this->moduleDir = $this->createPath(Application::getDocumentRoot(), BX_ROOT, 'modules', $this->MODULE_ID);
        }

        $this->bitrixAdminDir = $this->createPath(Application::getDocumentRoot(), BX_ROOT, 'admin');
    }

    /**
     * Идентификатор модуля
     */
    private function initId()
    {
        $this->MODULE_ID = 'fi1a.bitrixvalidation';
    }

    /**
     * Дата и версия модуля
     */
    private function initVersion()
    {
        $arModuleVersion = [];

        include __DIR__ . '/version.php';

        $this->MODULE_VERSION = $arModuleVersion['VERSION'];
        $this->MODULE_VERSION_DATE = $arModuleVersion['VERSION_DATE'];
    }

    /**
     * Название модуля
     */
    private function initName()
    {
        $this->MODULE_NAME = Loc::getMessage('FBV_MODULE_NAME');
    }

    /**
     * Описание модуля
     */
    private function initDescription()
    {
        $this->MODULE_DESCRIPTION = Loc::getMessage('FBV_MODULE_DESCRIPTION');
    }

    /**
     * Информация о партнере
     */
    private function initPartnerInfo()
    {
        $this->PARTNER_NAME = Loc::getMessage('FBV_PARTNER_NAME');
        $this->PARTNER_URI = 'https://github.com/fi1a/bitrixvalidation';
    }

    /**
     * Права модуля
     */
    protected function initGroupRights()
    {
        $this->MODULE_GROUP_RIGHTS = 'Y';
    }

    /**
     * Установка
     */
    public function DoInstall()
    {
        if (!$this->InstallDB()) {
            return false;
        }

        if (!$this->InstallEvents()) {
            $this->UninstallDB();

            return false;
        }

        if (!$this->InstallFiles()) {
            $this->UninstallDB();
            $this->UninstallFiles();

            return false;
        }

        return true;
    }

    /**
     * Установка базы модуля
     *
     * @return bool
     *
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\Db\SqlQueryException
     * @throws \Bitrix\Main\LoaderException
     */
    public function InstallDB(): bool
    {
        global $APPLICATION;

        $connection = Application::getConnection();

        try {
            $connection->startTransaction();

            ModuleManager::registerModule($this->MODULE_ID);
            Loader::includeModule($this->MODULE_ID);

            $this->setSettings();

            $connection->commitTransaction();
        } catch (\Exception $e) {
            $connection->rollbackTransaction();

            $APPLICATION->ResetException();
            $APPLICATION->ThrowException($e->getMessage());

            return false;
        }

        return true;
    }

    /**
     * Установка файлов модуля
     *
     * @return bool
     *
     * @throws \Bitrix\Main\IO\FileNotFoundException
     */
    public function InstallFiles(): bool
    {
        global $APPLICATION;

        if (!is_writable($this->bitrixAdminDir)) {
            $APPLICATION->ResetException();
            $APPLICATION->ThrowException(Loc::getMessage('FBV_WRITE_ERROR_BITRIX_ADMIN_DIR'));

            return false;
        }

        return true;
    }

    /**
     * Установка событий
     *
     * @return bool
     */
    public function InstallEvents(): bool
    {
        return true;
    }

    /**
     * Удаление модуля
     */
    public function DoUninstall()
    {
        if (!$this->UnInstallDB()) {
            return false;
        }

        if (!$this->UnInstallEvents()) {
            $this->InstallDB();

            return false;
        }

        if (!$this->UnInstallFiles()) {
            $this->InstallDB();
            $this->InstallEvents();

            return false;
        }

        return true;
    }

    /**
     * Удаление базы
     *
     * @return bool
     *
     * @throws \Bitrix\Main\Db\SqlQueryException
     */
    public function UnInstallDB(): bool
    {
        global $APPLICATION;

        $connection = Application::getConnection();

        try {
            Loader::includeModule($this->MODULE_ID);

            $connection->startTransaction();

            $this->deleteSettings();

            ModuleManager::unRegisterModule($this->MODULE_ID);

            $connection->commitTransaction();
        } catch (\Exception $e) {
            $connection->rollbackTransaction();

            $APPLICATION->ResetException();
            $APPLICATION->ThrowException($e->getMessage());

            return false;
        }

        return true;
    }

    /**
     * Удаление файлов
     *
     * @return bool
     *
     * @throws \Bitrix\Main\IO\FileNotFoundException
     */
    public function UnInstallFiles(): bool
    {
        global $APPLICATION;

        if (!is_writable($this->bitrixAdminDir)) {
            $APPLICATION->ResetException();
            $APPLICATION->ThrowException(Loc::getMessage('FBV_WRITE_ERROR_BITRIX_ADMIN_DIR'));

            return false;
        }

        return true;
    }

    /**
     * Удаления событий
     *
     * @return bool
     */
    public function UnInstallEvents(): bool
    {
        return true;
    }

    /**
     * Возвращает массив описывающий индивидуальную схему распределения прав модуля
     *
     * @return array
     */
    public function GetModuleRightList(): array
    {
        $rights = ['D', 'E', 'F', 'R', 'W',];
        $reference = [];

        foreach ($rights as $right) {
            $reference[] = '[' . $right . '] ' . Loc::getMessage('FBV_RIGHT_' . $right);
        }
        unset($right);

        return [
            'reference_id' => $rights,
            'reference' => $reference,
        ];
    }

    /**
     * Функция из кусочков создает полноценный путь с учетом системного разделителя папок
     *
     * @return string
     */
    protected function createPath()
    {
        $separator = DIRECTORY_SEPARATOR;
        $parts = func_get_args();

        return str_replace(
            [$separator, $separator . $separator, '//',],
            '/',
            (defined('PHP_WINDOWS_VERSION_PLATFORM') && PHP_WINDOWS_VERSION_PLATFORM ? '' : '/') . implode('/', $parts)
        );
    }

    /**
     * Функция из кусочков создает относительный путь с учетом системного разделителя папок
     *
     * @return string
     */
    protected function createRelativePath()
    {
        $separator = DIRECTORY_SEPARATOR;
        $parts = func_get_args();

        return str_replace([$separator, $separator . $separator, '//',], '/', '/' . implode('/', $parts));
    }

    /**
     * Устанавливает настройки модуля
     *
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\ArgumentOutOfRangeException
     * @throws \Bitrix\Main\ObjectPropertyException
     * @throws \Bitrix\Main\SystemException
     */
    private function setSettings()
    {
        Option::set($this->MODULE_ID, 'version', $this->MODULE_VERSION);
    }

    /**
     * Удаляет настройки модуля
     *
     * @throws \Bitrix\Main\ArgumentNullException
     */
    private function deleteSettings()
    {
        Option::delete($this->MODULE_ID, []);
    }
}
