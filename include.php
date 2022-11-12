<?php
namespace Fi1a\UserSettings;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;

if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

$classLocFilePaths = [
];

foreach ($classLocFilePaths as $classLocFilePath) {
    Loc::loadMessages($classLocFilePath);
}

Loader::registerAutoloadClasses(
    'fi1a.bitrixvalidation',
    [
        // Хелперы
        '\Fi1a\BitrixValidation\Helpers\ModuleRegistry' => 'lib/Helpers/ModuleRegistry.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);