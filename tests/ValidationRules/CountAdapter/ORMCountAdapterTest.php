<?php

declare(strict_types=1);

namespace Fi1a\Unit\BitrixValidation\ValidationRules\CountAdapter;

use Bitrix\Highloadblock\HighloadBlockTable;
use Fi1a\BitrixValidation\ValidationRules\CountAdapter\ORMCountAdapter;
use Fi1a\Unit\BitrixValidation\TestCase\EntityTestCase;

/**
 * ORM адаптер
 */
class ORMCountAdapterTest extends EntityTestCase
{
    /**
     * Возвращает кол-во элементов по фильтру
     */
    public function testGetCount(): void
    {
        $class = HighloadBlockTable::compileEntity(static::$hlId2)->getDataClass();

        $result = $class::add([
            'UF_FBV_TEST1'  => 1,
        ]);

        $this->assertTrue($result->isSuccess());

        $adapter = new ORMCountAdapter($class);
        $this->assertEquals(1, $adapter->getCount(['=UF_FBV_TEST1' => 1]));
        $this->assertEquals(0, $adapter->getCount(['=UF_FBV_TEST1' => 2]));
    }
}
