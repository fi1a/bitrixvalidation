<template>
  <div class="group">
    <h3>{{group.name}}</h3>
    <table class="internal">
      <tbody>
      <tr class="heading">
        <td class="col-rule">Правило</td>
        <td>Настройки</td>
        <td class="col-delete">Удал.</td>
      </tr>
      <Rule v-for="(rule, index) in group.rules" :rule="rule" :group="group" @delete="deleteRule(index)"/>
      </tbody>
    </table>
  </div>
</template>

<script>

import Rule from "./Rule.vue";

export default {
  name: "Group",

  components: {Rule},

  props: {
    group: Object
  },

  methods: {
    deleteRule(index) {
      this.group.rules.splice(index, 1);
      if (!this.group.rules.length) {
        this.$emit('delete');
      }
    }
  }
}
</script>

<style>
.group {
  margin-bottom: 30px;
}

.internal {
  width: 100%;
}

.adm-workarea .heading td {
  text-align: left !important;
}

.col-delete, .col-rule {
  width: 1px;
}
</style>