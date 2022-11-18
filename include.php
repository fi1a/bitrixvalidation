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
        '\Fi1a\BitrixValidation\Domain\GroupInterface' => 'lib/Domain/GroupInterface.php',
        '\Fi1a\BitrixValidation\Domain\Group' => 'lib/Domain/Group.php',
        '\Fi1a\BitrixValidation\Domain\GroupCollectionInterface' => 'lib/Domain/GroupCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\GroupCollection' => 'lib/Domain/GroupCollection.php',
        '\Fi1a\BitrixValidation\Domain\AbstractRule' => 'lib/Domain/AbstractRule.php',
        '\Fi1a\BitrixValidation\Domain\MaxRule' => 'lib/Domain/MaxRule.php',
        '\Fi1a\BitrixValidation\Domain\MinRule' => 'lib/Domain/MinRule.php',
        '\Fi1a\BitrixValidation\Domain\RuleCollectionInterface' => 'lib/Domain/RuleCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\RuleCollection' => 'lib/Domain/RuleCollection.php',
        '\Fi1a\BitrixValidation\Domain\RuleInterface' => 'lib/Domain/RuleInterface.php',
        '\Fi1a\BitrixValidation\Domain\FieldInterface' => 'lib/Domain/FieldInterface.php',
        '\Fi1a\BitrixValidation\Domain\Field' => 'lib/Domain/Field.php',
        '\Fi1a\BitrixValidation\Domain\FieldCollectionInterface' => 'lib/Domain/FieldCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\FieldCollection' => 'lib/Domain/FieldCollection.php',

        //Репозиторий
        '\Fi1a\BitrixValidation\Repositories\EntityRepositoryInterface' => 'lib/Repositories/EntityRepositoryInterface.php',
        '\Fi1a\BitrixValidation\Repositories\AbstractEntityRepository' => 'lib/Repositories/AbstractEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\HLEntityRepository' => 'lib/Repositories/HLEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\IBEntityRepository' => 'lib/Repositories/IBEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelectInterface' => 'lib/Repositories/EntitySelectInterface.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelect' => 'lib/Repositories/EntitySelect.php',
        '\Fi1a\BitrixValidation\Repositories\RuleRepositoryInterface' => 'lib/Repositories/RuleRepositoryInterface.php',
        '\Fi1a\BitrixValidation\Repositories\RuleRepository' => 'lib/Repositories/RuleRepository.php',

        // Сервисы
        '\Fi1a\BitrixValidation\Services\EntityServiceInterface' => 'lib/Services/EntityServiceInterface.php',
        '\Fi1a\BitrixValidation\Services\EntityService' => 'lib/Services/EntityService.php',

        // ORM
        '\Fi1a\BitrixValidation\ORM\Rule' => 'lib/ORM/Rule.php',
        '\Fi1a\BitrixValidation\ORM\RuleTable' => 'lib/ORM/RuleTable.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);