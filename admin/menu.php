<?php

namespace Fi1a\UserSettings;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Localization\Loc;

global $APPLICATION;

$moduleId = 'fi1a.bitrixvalidation';

$rightForModule = $APPLICATION->GetGroupRight($moduleId);

// Если нет прав - не продолжаем
if ('D' == $rightForModule) {
    return false;
}

Loc::loadMessages(__FILE__);

$menuItem = [
    [
        'parent_menu' => 'global_menu_content',
        'sort' => 2000,
        'text' => Loc::getMessage('FBV_MENU_TEXT'),
        'url'  => 'fi1a_bitrixvalidation.php?lang='.LANGUAGE_ID,
        'title'=> Loc::getMessage('FBV_MENU_TITLE'),
        'icon' => 'fi1a_bitrixvalidation_menu_icon',
    ]
];

return $menuItem;

