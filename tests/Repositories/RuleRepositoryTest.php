<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Repositories;

use Bitrix\Main\Entity\EntityError;
use Bitrix\Main\Entity\EventResult;
use Bitrix\Main\Event;
use Bitrix\Main\EventManager;
use Fi1a\BitrixValidation\Domain\Rules\MinRule;
use Fi1a\BitrixValidation\Domain\Rules\RuleCollectionInterface;
use Fi1a\BitrixValidation\Domain\Rules\RuleInterface;
use Fi1a\BitrixValidation\Repositories\RuleRepository;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;
use InvalidArgumentException;

/**
 * Репозиторий правил
 */
class RuleRepositoryTest extends EntityTestCase
{
    /**
     * Возвращает коллекцию правил
     */
    public function testGetList(): void
    {
        $repository = new RuleRepository();
        $collection = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $this->assertInstanceOf(RuleCollectionInterface::class, $collection);
        $this->assertCount(4, $collection);
    }

    /**
     * Сохранение
     */
    public function testSave(): void
    {
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $rules[0]->options = ['min' => 20];
        $rules[] = new MinRule([
            'key' => 'min',
            'options' => ['min' => 10],
            'sort' => 500,
            'field_id' => (string) static::$iblockPropertyId,
            'entity_type' => 'ib',
            'entity_id' => static::$iblockId,
            'multiple' => false,
        ]);
        $this->assertTrue($repository->save('ib', static::$iblockId, $rules));
        $rules->delete(2);
        $this->assertTrue($repository->save('ib', static::$iblockId, $rules));
    }

    /**
     * Исключение при пустом типе сущности
     */
    public function testSaveEntityTypeException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $repository->save('', 1, $rules);
    }

    /**
     * Исключение при пустом идентификаторе сущности
     */
    public function testSaveEntityIdException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $repository->save('ib', 0, $rules);
    }

    /**
     * Сохранение
     */
    public function testSaveUpdateException(): void
    {
        $eventHandlerKey = EventManager::getInstance()->addEventHandler(
            static::MODULE_ID,
            'RuleOnBeforeUpdate',
            function (Event $event) {
                $result = new EventResult();
                $result->setErrors([new EntityError('error')]);

                return $result;
            }
        );

        $this->expectException(InvalidArgumentException::class);
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        try {
            $repository->save('ib', static::$iblockId, $rules);
        } catch (\InvalidArgumentException $exception) {
            EventManager::getInstance()->removeEventHandler(
                static::MODULE_ID,
                'RuleOnBeforeUpdate',
                $eventHandlerKey
            );

            throw $exception;
        }
    }

    /**
     * Сохранение
     */
    public function testSaveDeleteException(): void
    {
        $eventHandlerKey = EventManager::getInstance()->addEventHandler(
            static::MODULE_ID,
            'RuleOnBeforeDelete',
            function (Event $event) {
                $result = new EventResult();
                $result->setErrors([new EntityError('error')]);

                return $result;
            }
        );

        $this->expectException(InvalidArgumentException::class);
        $repository = new RuleRepository();
        $rules = $repository->getList([
            'filter' => [
                '=ENTITY_TYPE' => 'ib',
                '=ENTITY_ID' => static::$iblockId,
            ],
        ]);
        $rules->delete(0);
        try {
            $repository->save('ib', static::$iblockId, $rules);
        } catch (\InvalidArgumentException $exception) {
            EventManager::getInstance()->removeEventHandler(
                static::MODULE_ID,
                'RuleOnBeforeDelete',
                $eventHandlerKey
            );

            throw $exception;
        }
    }

    /**
     * Проверка фабричного метода
     */
    public function testFactory(): void
    {
        $repository = new RuleRepository();
        $this->assertInstanceOf(RuleInterface::class, $repository->factory([
            'key' => 'min',
            'options' => ['min' => 10],
            'sort' => 500,
            'field_id' => (string) static::$iblockPropertyId,
            'entity_type' => 'ib',
            'entity_id' => static::$iblockId,
            'multiple' => 'false',
        ]));
    }
}
