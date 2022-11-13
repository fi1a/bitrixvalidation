<?php

use Bitrix\Main\HttpApplication;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
 * @var array $arParams
 * @var array $arResult
 */

$this->addExternalCss('/bitrix/components/bitrix/main.ui.grid/templates/.default/style.css');

$request = HttpApplication::getInstance()->getContext()->getRequest();
$lang = $request->getQuery('lang');
if (!$lang) {
    $lang = 'ru';
}
?>
<script>
    window.I18N_LOCALE = '<?= htmlspecialcharsbx($lang)?>';
</script>
<?php

include __DIR__ . '/dist/index.html';
