<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
 * @var array $arParams
 * @var array $arResult
 */

$this->addExternalCss('/bitrix/components/bitrix/main.ui.grid/templates/.default/style.css');

?>
<script>
    window.I18N_LOCALE = '<?= $arResult['LANGUAGE_ID']?>';
</script>
<?php

include __DIR__ . '/dist/index.html';
