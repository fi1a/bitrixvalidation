<?php

namespace Fi1a\BitrixValidation;

global $APPLICATION;

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Web\Uri;
use CAdminMessage;
use Fi1a\BitrixValidation\Helpers\Flush;

$module_id = 'fi1a.bitrixvalidation';

$moduleMode = Loader::includeSharewareModule($module_id);
$rightForModule = $APPLICATION->GetGroupRight($module_id);

// Если нет прав, или не установлен модуль - не продолжаем
if ('R' > $rightForModule || !in_array($moduleMode, [Loader::MODULE_DEMO, Loader::MODULE_INSTALLED])) {
    return;
}

Loc::loadMessages($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/options.php');
Loc::loadMessages(__FILE__);

$request = Application::getInstance()->getContext()->getRequest();

$isSubmit = $request->isPost()
    && ($request->getPost('save') || $request->getPost('apply'))
    && check_bitrix_sessid();

// Если нет прав, а форму отправили
if ($isSubmit && $rightForModule < 'W') {
    CAdminMessage::ShowMessage([
        'MESSAGE' => Loc::getMessage('FBV_NO_RIGHTS'),
        'TYPE' => 'ERROR',
    ]);

    $isSubmit = false;
}

if ($isSubmit) {
    $Update = true;
}

$backUrlSettings = $request->getQuery('back_url_settings');
if (!$backUrlSettings) {
    $backUrlSettings = $request->getPost('back_url_settings');
}

$errors = [];

if (Flush::get('FBV_EDIT_SUCCESS')) {
    CAdminMessage::ShowMessage([
        'MESSAGE' => Loc::getMessage('FBV_EDIT_SUCCESS'),
        'TYPE' => 'OK',
    ]);
}

$tabs = [
    [
        'DIV' => 'rights',
        'TAB' => Loc::getMessage('MAIN_TAB_RIGHTS'),
        'TITLE' => Loc::getMessage('MAIN_TAB_TITLE_RIGHTS'),
    ],
];

$tabControl = new \CAdminTabControl('tabControl', $tabs);

?>
<form method="POST" action="">
    <?php
    $tabControl->Begin();

    foreach ($tabs as $tab) {
        $tabControl->BeginNextTab();

        switch ($tab['DIV']) {
            case 'rights':
                // Права на модуль

                require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/admin/group_rights.php';

                break;
        }
    }
    unset($tab);

    $tabControl->Buttons(
        array(
            "disabled" => ($rightForModule < "W"),
            "back_url" => !empty($backUrlSettings) ? $backUrlSettings : null
        )
    );

    echo bitrix_sessid_post();

    $tabControl->End();
    ?>
</form>
<?php

if ($isSubmit && !count($errors)) {
    // Редиректим
    Flush::set('FBV_EDIT_SUCCESS', true);

    $uri = new Uri($request->getRequestUri());
    if ($request->getPost('save') && $backUrlSettings) {
        $uri = new Uri($backUrlSettings);
    }

    \LocalRedirect($uri->getUri());
}