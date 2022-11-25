<template>
  <table class="main-grid-table">
    <thead class="main-grid-header">
    <tr class="main-grid-row-head">
      <th class="main-grid-cell-head main-grid-cell-left">
        <div class="main-grid-cell-inner">
          <span class="main-grid-cell-head-container">
            <span class="main-grid-head-title">{{ $t('list.id') }}</span>
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
    <tr v-for="entity in entities" class="main-grid-row main-grid-row-body main-grid-not-count">
      <td class="main-grid-cell main-grid-cell-left" style="width: 1px;">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">
          {{ entity.id }}
        </span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">
          <a href="#1" v-on:click.prevent="select({id: entity.id, type: entity.entity_type})" :title="$t('list.editTitle')"><template v-if="entity.type_name">{{entity.type_name}} / </template>{{entity.name}}</a>
        </span></div>
      </td>
      <td class="main-grid-cell main-grid-cell-left">
        <div class="main-grid-cell-inner"><span class="main-grid-cell-content">{{entity.count_rules}}</span></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableList",

  props: {
    entities: Array,
  },

  methods: {
    select(select) {
      this.$emit('select', select);
    }
  }
}
</script>

<style scoped>
.main-grid-cell-head {
  cursor: default;
}
.main-grid-resize-button {
  opacity: 1;
  cursor: default;
}

html:not(.bx-firefox) .main-grid-resize-button::after,
html:not(.bx-firefox) .main-grid-resize-button:after {
  height: 50000px;
  opacity: 1;
}
</style>