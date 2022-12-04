<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models;

use Fi1a\BitrixValidation\Models\Rules\RuleCollectionInterface;
use Fi1a\Collection\DataType\ValueObjectInterface;

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
interface FieldInterface extends ValueObjectInterface
{
}
