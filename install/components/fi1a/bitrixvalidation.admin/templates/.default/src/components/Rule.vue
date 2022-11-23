<template>
  <tr :key="rule.id">
    <td class="rule-cell">
      <select v-model="v$.rule.key.$model" class="rule-select">
        <option :value="null">{{$t('edit.selectRule')}}</option>
        <option v-if="rule.key" :value="rule.key">{{getCurrentRule.title}}</option>
        <option v-for="item in rulesByTypeAndFilterSelected" :value="item.key">{{item.title}}</option>
      </select>
      <p v-if="v$.rule.key.$invalid && v$.rule.key.$dirty" class="error">
        {{$t('errors.required')}}
      </p>
    </td>
    <td class="rule-cell">
      <MinRule v-if="rule.key === 'min'" :options="rule.options" @updateOptions="updateOptions($event)"/>
      <MaxRule v-if="rule.key === 'max'" :options="rule.options" @updateOptions="updateOptions($event)"/>
      <MinCountRule v-if="rule.key === 'minCount'" :options="rule.options" @updateOptions="updateOptions($event)"/>
      <MaxCountRule v-if="rule.key === 'maxCount'" :options="rule.options" @updateOptions="updateOptions($event)"/>
    </td>
    <td class="rule-cell">
      <input type="text" v-model="rule.message" class="rule-message">
      <p class="rule-message-description" v-if="getCurrentRule">{{getCurrentRule.messageDescription}}</p>
    </td>
    <td class="rule-cell">
      <input type="text" v-model="v$.rule.sort.$model" class="rule-sort">
      <p v-if="v$.rule.sort.$invalid" class="error">
        <template v-if="v$.rule.sort.integer.$invalid">
          {{$t('errors.integer')}}
        </template>
        <template v-else-if="v$.rule.sort.required.$invalid">
          {{$t('errors.required')}}
        </template>
        <template v-else-if="v$.rule.sort.minValue.$invalid">
          {{$t('errors.minValue', {minValue: 0})}}
        </template>
      </p>
    </td>
    <td>
      <input class="rule-delete" v-on:click.prevent="$emit('delete')" type="button" :title="$t('edit.delete')" :value="$t('edit.delete')">
    </td>
  </tr>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, integer, minValue } from '@vuelidate/validators'
import MinRule from "./MinRule.vue";
import MaxRule from "./MaxRule.vue";
import MinCountRule from "./MinCountRule.vue";
import MaxCountRule from "./MaxCountRule.vue";

export default {
  name: "Rule",

  setup () {
    return {
      v$: useVuelidate()
    }
  },

  props: {
    rule: Object,
    group: Object,
    rules: Array,
    groupRules: Array,
  },

  components: {MinRule, MaxRule, MinCountRule, MaxCountRule},

  emits: ['delete'],

  computed: {
    rulesByTypeAndFilterSelected() {
      let rules = [];
      let existing = [];
      this.groupRules.forEach((rule) => {
        existing.push(rule.key)
      })
      this.rules.forEach((rule) => {
        if (existing.indexOf(rule.key) === -1) {
          rules.push(rule);
        }
      });

      rules.sort((a, b) => {
        return a.title < b.title ? -1 : a.title > b.title
      })

      return rules;
    },
    getCurrentRule() {
      if (!this.rule.key) {
        return null;
      }
      let item = null;
      this.rules.forEach((rule) => {
        if (this.rule.key === rule.key) {
          item = rule;
        }
      });

      return item;
    }
  },

  validations () {
    return {
      rule: {
        key: {
          required
        },
        sort: {
          required, integer, minValue: minValue(0)
        },
      }
    }
  },

  methods: {
    updateOptions(options) {
      this.rule.options = Object.assign({}, this.rule.options, options);
    }
  },

  watch: {
    rule: {
      handler() {
        const editComponent = this.$parent.$parent;

        if (typeof editComponent.$data.validation[this.group.id] === "undefined") {
          editComponent.$data.validation[this.group.id] = {};
        }
        editComponent.$data.validation[this.group.id]['rule'] = this.v$.$invalid;
      },
      deep: true
    }
  },

  beforeUnmount() {
    const editComponent = this.$parent.$parent;

    if (
        typeof editComponent.$data.validation[this.group.id] !== "undefined"
        && typeof editComponent.$data.validation[this.group.id]['rule'] !== "undefined"
    ) {
      editComponent.$data.validation[this.group.id]['rule'] = false;
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

.adm-workarea .rule-sort {
  width: 50px;
  margin-top: 18px !important;
}

.adm-workarea .rule-message {
  min-width: 300px;
  margin-top: 18px !important;
}

.rule-message-description {
  margin-top: 2px;
  font-style: italic;
}
</style>