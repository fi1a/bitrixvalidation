export default {
    /**
     * Список
     */
    getList() {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixvalidation.admin',
            'getList',
            {
                mode:'class',
                data: {},
            }
        );
    },

    /**
     * Получить сущность
     */
    getEntity(entity) {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixvalidation.admin',
            'getEntity',
            {
                mode:'class',
                data: entity,
            }
        );
    }
}