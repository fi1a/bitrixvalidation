<?php

namespace Fi1a\BitrixValidation;

use Bitrix\Main\Localization\Loc;

require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_admin_before.php");

global $APPLICATION;

Loc::loadMessages(__FILE__);

$APPLICATION->SetTitle(Loc::getMessage('FBV_TITLE'));

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_admin_after.php");

$APPLICATION->IncludeComponent(
    'fi1a:bitrixvalidation.admin',
    '',
    [
    ]
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_admin.php");
