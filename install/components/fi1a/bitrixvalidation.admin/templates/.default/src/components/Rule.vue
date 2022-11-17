<template>
  <tr>
    <td class="rule-cell">
      <select v-model="rule.key" class="rule-select">
        <option v-for="item in rulesByType" :value="item.key">{{item.title}}</option>
      </select>
    </td>
    <td class="rule-cell">
      <RuleMin v-if="rule.key === 'min'" :options="rule.options" @updateOptions="updateOptions($event)"/>
    </td>
    <td>
      <input v-on:click.prevent="$emit('delete')" type="button" title="Удалить" value="Удалить">
    </td>
  </tr>
</template>

<script>

import RuleMin from "./RuleMin.vue";

export default {
  name: "Rule",

  props: {
    rule: Object,
    group: Object
  },

  components: {RuleMin},

  computed: {
    rulesByType() {
      let rules = [
        {
          key: null,
          title: this.$t('edit.selectRule')
        }
      ];
      this.rules.forEach((rule) => {
        if (rule.type === this.group.type) {
          rules.push(rule);
        }
      });

      return rules;
    }
  },

  data() {
    return {
      rules: [
        {
          title: this.$t('rules.min'),
          key: 'min',
          type: 'number'
        }
      ],
    }
  },

  methods: {
    updateOptions(options) {
      this.rule.options = Object.assign({}, this.rule.options, options);
    }
  }
}
</script>

<style>
.adm-workarea .rule-select {
  min-width: 300px;
  margin-top: 18px;
}

.rule-cell {
  vertical-align: top;
}
</style>