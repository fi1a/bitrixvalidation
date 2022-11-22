<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\BitrixValidation\Domain\Rules\RuleCollectionInterface;
use Fi1a\Collection\DataType\IValueObject;

/**
 * Поле
 *
 * @property string|int $id
 * @property string $name
 * @property string $title
 * @property string $type
 * @property string $internalType
 * @property bool $multiple
 * @property RuleCollectionInterface $rules
 * @property RuleCollectionInterface $multipleRules
 * @method string|int getId()
 * @method string getName()
 * @method string getTitle()
 * @method string getType()
 * @method string getInternalType()
 * @method bool getMultiple()
 * @method RuleCollectionInterface getRules()
 * @method RuleCollectionInterface getMultipleRules()
 */
interface FieldInterface extends IValueObject
{
}
