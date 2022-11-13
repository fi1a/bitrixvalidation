<template>
  <table class="main-grid-table">
    <thead class="main-grid-header">
    <tr class="main-grid-row-head">
      <th class="main-grid-cell-head main-grid-cell-left" style="width: 180px;">
        <div class="main-grid-cell-inner">
              <span class="main-grid-cell-head-container">
                <span class="main-grid-head-title">{{ $t('list.type') }}</span>
                <span class="main-grid-resize-button"></span>
              </span>
        </div>
      </th>
      <th class="main-grid-cell-head main-grid-cell-left">
        <div class="main-grid-cell-inner">
              <span class="main-grid-cell-head-container">
                <span class="main-grid-head-title">{{ $t('list.name') }}</span>
                <span class="main-grid-resize-button"></span>
              </span>
        </div>
      </th>
      <th class="main-grid-cell-head main-grid-cell-left" style="width: 1px;">
        <div class="main-grid-cell-inner">
              <span class="main-grid-cell-head-container">
                <span class="main-grid-head-title">{{ $t('list.count') }}</span>
              </span>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr class="main-grid-row main-grid-row-body main-grid-not-count">
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">Инфоблок</span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">
              <a href="#1" v-on:click.prevent="select(1)" title="ерейти к редактированию правил">Товары и Услуги &mdash; [s1] Продукция</a>
            </span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">20</span></div>
      </td>
    </tr>
    <tr class="main-grid-row main-grid-row-body main-grid-not-count">
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">Highload-блоки</span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">
              <a href="#1" v-on:click.prevent="select(2)" title="ерейти к редактированию правил">Типы групп товаров</a>
            </span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">10</span></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",

  methods: {
    select(entityId) {
      this.$emit('select', entityId);
    }
  }
}
</script>