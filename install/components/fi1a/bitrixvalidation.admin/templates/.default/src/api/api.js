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
    }
}