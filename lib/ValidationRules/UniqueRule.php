<?php

declare(strict_types=1);

namespace Fi1a\BitrixValidation\ValidationRules;

use Bitrix\Main\Localization\Loc;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\CountAdapterInterface;
use Fi1a\Validation\Rule\AbstractRule;
use Fi1a\Validation\ValueInterface;

/**
 * Проверка на уникальное значение
 */
class UniqueRule extends AbstractRule
{
    /**
     * @var CountAdapterInterface
     */
    private $adapter;

    /**
     * @var string
     */
    private $column;

    /**
     * @var int|null
     */
    private $notId;

    /**
     * Конструктор
     */
    public function __construct(CountAdapterInterface $adapter, string $column, ?int $notId = null)
    {
        $this->adapter = $adapter;
        $this->column = $column;
        $this->notId = $notId;
    }

    /**
     * @inheritDoc
     */
    public function validate(ValueInterface $value): bool
    {
        if (!$value->isPresence()) {
            return true;
        }
        $filter = [
            '=' . $this->column => $value->getValue(),
        ];
        if ($this->notId) {
            $filter['!ID'] = $this->notId;
        }
        $success = $this->adapter->getCount($filter) === 0;

        if (!$success) {
            $this->addMessage(Loc::getMessage('FBV_UNIQUE_MESSAGE'), 'unique');
        }

        return $success;
    }

    /**
     * @inheritDoc
     */
    public static function getRuleName(): string
    {
        return 'unique';
    }
}
