<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\Domain;

use Fi1a\Collection\DataType\IValueObject;

/**
 * Поле
 *
 * @property string|int $id
 * @property string $name
 * @property string $type
 * @property string $internalType
 * @property bool $multiple
 */
interface FieldInterface extends IValueObject
{
}
