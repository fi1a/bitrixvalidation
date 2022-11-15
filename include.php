<?php
namespace Fi1a\UserSettings;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;

if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

$classLocFilePaths = [
    __DIR__ . '/lib/Repositories/IBEntityRepository.php',
    __DIR__ . '/lib/Repositories/HLEntityRepository.php',
];

foreach ($classLocFilePaths as $classLocFilePath) {
    Loc::loadMessages($classLocFilePath);
}

Loader::registerAutoloadClasses(
    'fi1a.bitrixvalidation',
    [
        // Хелперы
        '\Fi1a\BitrixValidation\Helpers\ModuleRegistry' => 'lib/Helpers/ModuleRegistry.php',
        '\Fi1a\BitrixValidation\ActionFilter\Rights' => 'lib/ActionFilter/Rights.php',

        // Домен
        '\Fi1a\BitrixValidation\Domain\EntityInterface' => 'lib/Domain/EntityInterface.php',
        '\Fi1a\BitrixValidation\Domain\EntityCollectionInterface' => 'lib/Domain/EntityCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\Entity' => 'lib/Domain/Entity.php',
        '\Fi1a\BitrixValidation\Domain\EntityCollection' => 'lib/Domain/EntityCollection.php',

        //Репозиторий
        '\Fi1a\BitrixValidation\Repositories\EntityRepositoryInterface' => 'lib/Repositories/EntityRepositoryInterface.php',
        '\Fi1a\BitrixValidation\Repositories\AbstractEntityRepository' => 'lib/Repositories/AbstractEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\HLEntityRepository' => 'lib/Repositories/HLEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\IBEntityRepository' => 'lib/Repositories/IBEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelectInterface' => 'lib/Repositories/EntitySelectInterface.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelect' => 'lib/Repositories/EntitySelect.php',

        // Сервисы
        '\Fi1a\BitrixValidation\Services\EntityServiceInterface' => 'lib/Services/EntityServiceInterface.php',
        '\Fi1a\BitrixValidation\Services\EntityService' => 'lib/Services/EntityService.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);