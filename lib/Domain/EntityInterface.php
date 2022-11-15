<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

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
 */
interface EntityInterface extends IValueObject
{
}
