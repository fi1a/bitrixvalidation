<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;

/**
 * Класс компонента вывода страницы настройки правил валидации
 */
class Fi1aBitrixValidationAdminComponent extends CBitrixComponent
{

    const MODULE_ID = 'fi1a.bitrixvalidation';

    /**
     * @inheritDoc
     */
    public function onPrepareComponentParams($arParams)
    {
        global $APPLICATION;

        if (!$arParams['RIGHT']) {
            $arParams['RIGHT'] = $APPLICATION->GetGroupRight(static::MODULE_ID);
        }

        if (!$arParams['LANGUAGE_ID']) {
            $arParams['LANGUAGE_ID'] = LANGUAGE_ID;
        }

        return $arParams;
    }

    /**
     * @inheritDoc
     */
    public function executeComponent()
    {
        $this->arResult = [
            'STATUS' => '',
            'ERRORS' => [],
        ];
        $moduleMode = Loader::includeSharewareModule(static::MODULE_ID);

        // Проверка установлен модуль или нет
        if (!in_array($moduleMode, [Loader::MODULE_DEMO, Loader::MODULE_INSTALLED])) {
            $this->arResult['STATUS'] = 'ERROR';
            $this->arResult['ERRORS'][] = Loc::getMessage('FBV_MODULE_NOT_INSTALL');

            $this->IncludeComponentTemplate();

            return;
        }

        // Проверка прав
        if ($this->arParams['RIGHT'] < 'E') {
            $this->arResult['STATUS'] = 'ERROR';
            $this->arResult['ERRORS'][] = Loc::getMessage('FBV_NO_RIGHTS');

            $this->IncludeComponentTemplate();

            return;
        }

        $request = Application::getInstance()->getContext()->getRequest();

        // Сохранение значений
        if ($request->isPost() && ($request->getPost('save') || $request->getPost('apply'))) {
            if (!check_bitrix_sessid()) {
                $this->arResult['ERRORS'][] = Loc::getMessage('FBV_SESSION_EXPIRED');
            } elseif ($this->arParams['RIGHT'] < 'F') {
                $this->arResult['ERRORS'][] = Loc::getMessage('FBV_NO_RIGHTS_FOR_CHANGE');
            }

            if (empty($this->arResult['ERRORS'])) {

            }
        }

        $this->IncludeComponentTemplate();
    }
}
