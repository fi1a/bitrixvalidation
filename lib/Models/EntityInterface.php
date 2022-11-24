<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Models;

use Fi1a\Collection\DataType\IValueObject;

/**
 * Сущность
 *
 * @property string $entityType
 * @property string $entityTypeName
 * @property int $id
 * @property string $name
 * @property string $typeName
 * @property string[][] $fields
 * @property string[][] $groups
 * @method string getEntityType()
 * @method string getEntityTypeName()
 * @method int getId()
 * @method string getName()
 * @method string getTypeName()
 * @method array getFields()
 * @method array getGroups()
 */
interface EntityInterface extends IValueObject
{
}
