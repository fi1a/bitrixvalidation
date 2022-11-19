<?php
namespace Fi1a\UserSettings;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Domain\Rule\MaxRule;
use Fi1a\BitrixValidation\Domain\Rule\MinRule;
use Fi1a\BitrixValidation\Domain\Rule\MaxCountRule;
use Fi1a\BitrixValidation\Domain\Rule\MinCountRule;
use Fi1a\BitrixValidation\Domain\Rule\RuleRegistry;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;

if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

$classLocFilePaths = [
    __DIR__ . '/lib/Repositories/IBEntityRepository.php',
    __DIR__ . '/lib/Repositories/HLEntityRepository.php',
    __DIR__ . '/lib/Domain/Rule/MinRule.php',
    __DIR__ . '/lib/Domain/Rule/MaxRule.php',
    __DIR__ . '/lib/Domain/Rule/MinCountRule.php',
    __DIR__ . '/lib/Domain/Rule/MaxCountRule.php',
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
        '\Fi1a\BitrixValidation\Domain\FieldInterface' => 'lib/Domain/FieldInterface.php',
        '\Fi1a\BitrixValidation\Domain\Field' => 'lib/Domain/Field.php',
        '\Fi1a\BitrixValidation\Domain\FieldCollectionInterface' => 'lib/Domain/FieldCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\FieldCollection' => 'lib/Domain/FieldCollection.php',

        // Правила
        '\Fi1a\BitrixValidation\Domain\Rule\AbstractRule' => 'lib/Domain/Rule/AbstractRule.php',
        '\Fi1a\BitrixValidation\Domain\Rule\RuleCollectionInterface' => 'lib/Domain/Rule/RuleCollectionInterface.php',
        '\Fi1a\BitrixValidation\Domain\Rule\RuleCollection' => 'lib/Domain/Rule/RuleCollection.php',
        '\Fi1a\BitrixValidation\Domain\Rule\RuleInterface' => 'lib/Domain/Rule/RuleInterface.php',
        '\Fi1a\BitrixValidation\Domain\Rule\RuleRegistryInterface' => 'lib/Domain/Rule/RuleRegistryInterface.php',
        '\Fi1a\BitrixValidation\Domain\Rule\RuleRegistry' => 'lib/Domain/Rule/RuleRegistry.php',
        '\Fi1a\BitrixValidation\Domain\Rule\MaxRule' => 'lib/Domain/Rule/MaxRule.php',
        '\Fi1a\BitrixValidation\Domain\Rule\MinRule' => 'lib/Domain/Rule/MinRule.php',
        '\Fi1a\BitrixValidation\Domain\Rule\MaxCountRule' => 'lib/Domain/Rule/MaxCountRule.php',
        '\Fi1a\BitrixValidation\Domain\Rule\MinCountRule' => 'lib/Domain/Rule/MinCountRule.php',

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

RuleRegistry::add('min', MinRule::class);
RuleRegistry::add('max', MaxRule::class);
RuleRegistry::add('minCount', MinCountRule::class);
RuleRegistry::add('maxCount', MaxCountRule::class);