<?php

namespace Fi1a\BitrixValidation;

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\Models\Rules\AlphaNumericRule;
use Fi1a\BitrixValidation\Models\Rules\AlphaRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenCountRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenDateRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenLengthRule;
use Fi1a\BitrixValidation\Models\Rules\BetweenRule;
use Fi1a\BitrixValidation\Models\Rules\BooleanRule;
use Fi1a\BitrixValidation\Models\Rules\DateRule;
use Fi1a\BitrixValidation\Models\Rules\EmailRule;
use Fi1a\BitrixValidation\Models\Rules\EqualDateRule;
use Fi1a\BitrixValidation\Models\Rules\InRule;
use Fi1a\BitrixValidation\Models\Rules\IntegerRule;
use Fi1a\BitrixValidation\Models\Rules\JsonRule;
use Fi1a\BitrixValidation\Models\Rules\MaxLengthRule;
use Fi1a\BitrixValidation\Models\Rules\MaxRule;
use Fi1a\BitrixValidation\Models\Rules\MinLengthRule;
use Fi1a\BitrixValidation\Models\Rules\MinRule;
use Fi1a\BitrixValidation\Models\Rules\MaxCountRule;
use Fi1a\BitrixValidation\Models\Rules\MinCountRule;
use Fi1a\BitrixValidation\Models\Rules\NotInRule;
use Fi1a\BitrixValidation\Models\Rules\NumericRule;
use Fi1a\BitrixValidation\Models\Rules\RegexRule;
use Fi1a\BitrixValidation\Models\Rules\RuleRegistry;
use Fi1a\BitrixValidation\Models\Rules\StrictInRule;
use Fi1a\BitrixValidation\Models\Rules\StrictNotInRule;
use \Fi1a\BitrixValidation\Models\Rules\UniqueRule;
use Fi1a\BitrixValidation\Helpers\ModuleRegistry;
use Fi1a\BitrixValidation\ValidationRules\UniqueRule as ValidationUniqueRule;
use Fi1a\Validation\Validator;

if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

$classLocFilePaths = [
    __DIR__ . '/lib/ActionFilter/Rights.php',
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
    __DIR__ . '/lib/Models/Rules/EmailRule.php',
    __DIR__ . '/lib/Models/Rules/DateRule.php',
    __DIR__ . '/lib/Models/Rules/JsonRule.php',
    __DIR__ . '/lib/Models/Rules/RegexRule.php',
    __DIR__ . '/lib/Models/Rules/InRule.php',
    __DIR__ . '/lib/Models/Rules/NotInRule.php',
    __DIR__ . '/lib/Models/Rules/StrictInRule.php',
    __DIR__ . '/lib/Models/Rules/StrictNotInRule.php',
    __DIR__ . '/lib/Models/Rules/UniqueRule.php',
    __DIR__ . '/lib/ValidationRules/UniqueRule.php',
    __DIR__ . '/lib/Models/Rules/EqualDateRule.php',
    __DIR__ . '/lib/Models/Rules/BetweenDateRule.php',
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
        '\Fi1a\BitrixValidation\Models\Rules\EmailRule' => 'lib/Models/Rules/EmailRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\DateRule' => 'lib/Models/Rules/DateRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\JsonRule' => 'lib/Models/Rules/JsonRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\RegexRule' => 'lib/Models/Rules/RegexRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\InRule' => 'lib/Models/Rules/InRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\NotInRule' => 'lib/Models/Rules/NotInRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\StrictInRule' => 'lib/Models/Rules/StrictInRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\StrictNotInRule' => 'lib/Models/Rules/StrictNotInRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\UniqueRule' => 'lib/Models/Rules/UniqueRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\EqualDateRule' => 'lib/Models/Rules/EqualDateRule.php',
        '\Fi1a\BitrixValidation\Models\Rules\BetweenDateRule' => 'lib/Models/Rules/BetweenDateRule.php',

        //Репозиторий
        '\Fi1a\BitrixValidation\Repositories\EntityRepositoryInterface' => 'lib/Repositories/EntityRepositoryInterface.php',
        '\Fi1a\BitrixValidation\Repositories\AbstractEntityRepository' => 'lib/Repositories/AbstractEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\HLEntityRepository' => 'lib/Repositories/HLEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\IBEntityRepository' => 'lib/Repositories/IBEntityRepository.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelectorInterface' => 'lib/Repositories/EntitySelectorInterface.php',
        '\Fi1a\BitrixValidation\Repositories\EntitySelector' => 'lib/Repositories/EntitySelector.php',
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

        // Правила валидации
        '\Fi1a\BitrixValidation\ValidationRules\UniqueRule' => 'lib/ValidationRules/UniqueRule.php',
    ]
);

global $APPLICATION;

ModuleRegistry::configure($APPLICATION, $GLOBALS);

Validator::addRule(ValidationUniqueRule::class);

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
RuleRegistry::add('email', EmailRule::class);
RuleRegistry::add('date', DateRule::class);
RuleRegistry::add('json', JsonRule::class);
RuleRegistry::add('regex', RegexRule::class);
RuleRegistry::add('in', InRule::class);
RuleRegistry::add('notIn', NotInRule::class);
RuleRegistry::add('strictIn', StrictInRule::class);
RuleRegistry::add('strictNotIn', StrictNotInRule::class);
RuleRegistry::add('unique', UniqueRule::class);
RuleRegistry::add('equalDate', EqualDateRule::class);
RuleRegistry::add('betweenDate', BetweenDateRule::class);
