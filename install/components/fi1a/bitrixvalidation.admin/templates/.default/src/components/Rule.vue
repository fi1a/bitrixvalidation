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
      <component :is="rule.key + 'Rule'" :options="rule.options" @updateOptions="updateOptions($event)"/>
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
import MinRule from "./RuleOptions/MinRule.vue";
import MaxRule from "./RuleOptions/MaxRule.vue";
import MinCountRule from "./RuleOptions/MinCountRule.vue";
import MaxCountRule from "./RuleOptions/MaxCountRule.vue";
import BetweenCountRule from "./RuleOptions/BetweenCountRule.vue";
import BetweenRule from "./RuleOptions/BetweenRule.vue";
import MinLengthRule from "./RuleOptions/MinLengthRule.vue";
import MaxLengthRule from "./RuleOptions/MaxLengthRule.vue";
import BetweenLengthRule from "./RuleOptions/BetweenLengthRule.vue";
import AlphaNumericRule from "./RuleOptions/AlphaNumericRule.vue";
import AlphaRule from "./RuleOptions/AlphaRule.vue";
import BooleanRule from "./RuleOptions/BooleanRule.vue";
import IntegerRule from "./RuleOptions/IntegerRule.vue";
import NumericRule from "./RuleOptions/NumericRule.vue";
import EmailRule from "./RuleOptions/EmailRule.vue";
import DateRule from "./RuleOptions/DateRule.vue";
import JsonRule from "./RuleOptions/JsonRule.vue";
import RegexRule from "./RuleOptions/RegexRule.vue";
import UniqueRule from "./RuleOptions/UniqueRule.vue";
import InRule from "./RuleOptions/InRule.vue";
import NotInRule from "./RuleOptions/NotInRule.vue";
import StrictInRule from "./RuleOptions/StrictInRule.vue";
import StrictNotInRule from "./RuleOptions/StrictNotInRule.vue";

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

  components: {
    MinRule, MaxRule, MinCountRule, MaxCountRule, BetweenCountRule, BetweenRule, MinLengthRule, MaxLengthRule,
    BetweenLengthRule, AlphaNumericRule, AlphaRule, BooleanRule, IntegerRule, NumericRule, EmailRule, DateRule,
    JsonRule, RegexRule, UniqueRule, InRule, NotInRule, StrictInRule, StrictNotInRule,
  },

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
    },
    'rule.key': {
      handler() {
        this.rule.options = {};
      }
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
  width: 300px;
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