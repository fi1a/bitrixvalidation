<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\Services;

use Fi1a\BitrixValidation\Services\EntityService;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * Сервис сущностей
 */
class EntityServiceTest extends EntityTestCase
{
    /**
     * Возвращает список сущностей инфоблоков
     */
    public function testGetListIB(): void
    {
        $service = new EntityService();
        $array = $service->getListIB();
        $this->assertIsArray($array);
        $this->assertGreaterThanOrEqual(1, count($array));
        $find = false;
        foreach ($array as $item) {
            if ((int) $item['id'] === static::$iblockId) {
                $find = true;
            }
        }
        $this->assertTrue($find);
    }

    /**
     * Возвращает список сущностей Highload-блоков
     */
    public function testGetListHL(): void
    {
        $service = new EntityService();
        $array = $service->getListHL();
        $this->assertIsArray($array);
        $this->assertGreaterThanOrEqual(1, count($array));
        $find = false;
        foreach ($array as $item) {
            if ((int) $item['id'] === static::$hlId) {
                $find = true;
            }
        }
        $this->assertTrue($find);
    }
}
