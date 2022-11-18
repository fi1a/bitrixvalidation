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
     *
     * @param {Object} entity
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
    },

    /**
     * Отправить запрос на сохранение правил
     *
     * @param {String} entityType
     * @param {Number} entityId
     * @param {Array} rules
     */
    submit(entityType, entityId, rules) {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixvalidation.admin',
            'submit',
            {
                mode:'class',
                data: {
                    entityType,
                    entityId,
                    rules: rules
                },
            }
        );
    }
}