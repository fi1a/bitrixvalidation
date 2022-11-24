<?php
namespace Fi1a\UserSettings;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Models\Rules\AlphaNumericRule;
use Fi1a\BitrixValidation\Models\Rules\AlphaRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenCountRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenLengthRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenRule;
use Fi1a\BitrixValidation\Models\Rules\BooleanRule;
use Fi1a\BitrixValidation\Models\Rules\IntegerRule;
use Fi1a\BitrixValidation\Models\Rules\MaxLengthRule;
use Fi1a\BitrixValidation\Models\Rules\MaxRule;
use Fi1a\BitrixValidation\Models\Rules\MinLengthRule;
use Fi1a\BitrixValidation\Models\Rules\MinRule;
use Fi1a\BitrixValidation\Models\Rules\MaxCountRule;
use Fi1a\BitrixValidation\Models\Rules\MinCountRule;
use Fi1a\BitrixValidation\Models\Rules\NumericRule;
use Fi1a\BitrixValidation\Models\Rules\RuleRegistry;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;

if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

$classLocFilePaths = [
    __DIR__ . '/lib/Repositories/IBEntityRepository.php',
    __DIR__ . '/lib/Repositories/HLEntityRepository.php',
    __DIR__ . '/lib/Models/Rules/MinRule.php',
    __DIR__ . '/lib/Models/Rules/MaxRule.php',
    __DIR__ . '/lib/Models/Rules/MinCountRule.php',
    __DIR__ . '/lib/Models/Rules/MaxCountRule.php',
    __DIR__ . '/lib/Models/Rules/BetweenCountRule.php',
    __DIR__ . '/lib/Models/Rules/BetweenRule.php',
    __DIR__ . '/lib/Models/Rules/MinLengthRule.php',
    __DIR__ . '/lib/Models/Rules/MaxLengthRule.php',
    __DIR__ . '/lib/Models/Rules/BetweenLengthRule.php',
    __DIR__ . '/lib/Models/Rules/AlphaNumericRule.php',
    __DIR__ . '/lib/Models/Rules/AlphaRule.php',
    __DIR__ . '/lib/Models/Rules/BooleanRule.php',
    __DIR__ . '/lib/Models/Rules/IntegerRule.php',
    __DIR__ . '/lib/Models/Rules/NumericRule.php',
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
        '\Fi1a\BitrixValidation\Models\EntityInterface' => 'lib/Models/EntityInterface.php',
        '\Fi1a\BitrixValidation\Models\EntityCollectionInterface' => 'lib/Models/EntityCollectionInterface.php',
        '\Fi1a\BitrixValidation\Models\Entity' => 'lib/Models/Entity.php',
        '\Fi1a\BitrixValidation\Models\EntityCollection' => 'lib/Models/EntityCollection.php',
        '\Fi1a\BitrixValidation\Models\GroupInterface' => 'lib/Models/GroupInterface.php',
        '\Fi1a\BitrixValidation\Models\Group' => 'lib/Models/Group.php',
        '\Fi1a\BitrixValidation\Models\GroupCollectionInterface' => 'lib/Models/GroupCollectionInterface.php',
        '\Fi1a\BitrixValidation\Models\GroupCollection' => 'lib/Models/GroupCollection.php',
        '\Fi1a\BitrixValidation\Models\FieldInterface' => 'lib/Models/FieldInterface.php',
        '\Fi1a\BitrixValidation\Models\Field' => 'lib/Models/Field.php',
        '\Fi1a\BitrixValidation\Models\FieldCollectionInterface' => 'lib/Models/FieldCollectionInterface.php',
        '\Fi1a\BitrixValidation\Models\FieldCollection' => 'lib/Models/FieldCollection.php',

        // Правила
        '\Fi1a\BitrixValidation\Models\Rules\AbstractRule' => 'lib/Models/Rules/AbstractRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\RuleCollectionInterface' => 'lib/Models/Rules/RuleCollectionInterface.php',
        '\Fi1a\BitrixValidation\Models\Rules\RuleCollection' => 'lib/Models/Rules/RuleCollection.php',
        '\Fi1a\BitrixValidation\Models\Rules\RuleInterface' => 'lib/Models/Rules/RuleInterface.php',
        '\Fi1a\BitrixValidation\Models\Rules\RuleRegistryInterface' => 'lib/Models/Rules/RuleRegistryInterface.php',
        '\Fi1a\BitrixValidation\Models\Rules\RuleRegistry' => 'lib/Models/Rules/RuleRegistry.php',
        '\Fi1a\BitrixValidation\Models\Rules\BetweenCountRule' => 'lib/Models/Rules/BetweenCountRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\BetweenLengthRule' => 'lib/Models/Rules/BetweenLengthRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\BetweenRule' => 'lib/Models/Rules/BetweenRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MaxCountRule' => 'lib/Models/Rules/MaxCountRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MaxLengthRule' => 'lib/Models/Rules/MaxLengthRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MaxRule' => 'lib/Models/Rules/MaxRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MinCountRule' => 'lib/Models/Rules/MinCountRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MinLengthRule' => 'lib/Models/Rules/MinLengthRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\MinRule' => 'lib/Models/Rules/MinRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\AlphaNumericRule' => 'lib/Models/Rules/AlphaNumericRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\AlphaRule' => 'lib/Models/Rules/AlphaRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\BooleanRule' => 'lib/Models/Rules/BooleanRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\IntegerRule' => 'lib/Models/Rules/IntegerRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\NumericRule' => 'lib/Models/Rules/NumericRule.php',

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

        // События
        '\Fi1a\BitrixValidation\Events\Events' => 'lib/Events/Events.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);

RuleRegistry::add('min', MinRule::class);
RuleRegistry::add('max', MaxRule::class);
RuleRegistry::add('minCount', MinCountRule::class);
RuleRegistry::add('maxCount', MaxCountRule::class);
RuleRegistry::add('betweenCount', BetweenCountRule::class);
RuleRegistry::add('between', BetweenRule::class);
RuleRegistry::add('minLength', MinLengthRule::class);
RuleRegistry::add('maxLength', MaxLengthRule::class);
RuleRegistry::add('betweenLength', BetweenLengthRule::class);
RuleRegistry::add('alphaNumeric', AlphaNumericRule::class);
RuleRegistry::add('alpha', AlphaRule::class);
RuleRegistry::add('boolean', BooleanRule::class);
RuleRegistry::add('integer', IntegerRule::class);
RuleRegistry::add('numeric', NumericRule::class);
