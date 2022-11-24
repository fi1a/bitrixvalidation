<template>
  <div class="rule-min-count-row">
    <label for="min">{{$t('between.min')}}</label>
    <input id="min" type="text" :value="values.min" @input="setMin($event.target.value)">
    <p v-if="v$.values.min.$invalid" class="error">
      <template v-if="v$.values.min.decimal.$invalid">
        {{$t('errors.decimal')}}
      </template>
      <template v-else-if="v$.values.min.required.$invalid">
        {{$t('errors.required')}}
      </template>
      <template v-else-if="v$.values.min.mustBeLessOrEqual.$invalid && !v$.values.max.decimal.$invalid">
        {{$t('errors.mustBeLessOrEqual', {value: String(this.values.max)})}}
      </template>
    </p>
  </div>
  <div class="rule-max-count-row">
    <label for="max">{{$t('between.max')}}</label>
    <input id="max" type="text" :value="values.max" @input="setMax($event.target.value)">
    <p v-if="v$.values.max.$invalid" class="error">
      <template v-if="v$.values.max.decimal.$invalid">
        {{$t('errors.decimal')}}
      </template>
      <template v-else-if="v$.values.max.required.$invalid">
        {{$t('errors.required')}}
      </template>
      <template v-else-if="v$.values.max.mustBeGreaterOrEqual.$invalid && !v$.values.min.decimal.$invalid">
        {{$t('errors.mustBeGreaterOrEqual', {value: String(this.values.min)})}}
      </template>
    </p>
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, decimal } from '@vuelidate/validators'
import RuleMixin from './../../mixins/RuleMixin.vue';
import {mustBeGreaterOrEqual} from '../../validations/mustBeGreaterOrEqual';
import {mustBeLessOrEqual} from '../../validations/mustBeLessOrEqual';

export default {
  name: "BetweenRule",

  setup () {
    return {
      v$: useVuelidate()
    }
  },

  mixins: [RuleMixin],

  props: {
    options: Object
  },

  data() {
    let values = Object.assign({
      min: 0,
      max: 0
    }, this.options)
    return {
      values
    }
  },

  mounted() {
    this.$emit('updateOptions', this.values);
  },

  validations () {
    return {
      values: {
        min: {
          required, decimal, mustBeLessOrEqual: mustBeLessOrEqual('max')
        },
        max: {
          required, decimal, mustBeGreaterOrEqual: mustBeGreaterOrEqual('min')
        }
      }
    }
  },

  methods: {
    setMax(max) {
      this.values.max = max;
      this.v$.$touch();
      if (!this.v$.$error) {
        this.$emit('updateOptions', this.values);
      }
    },
    setMin(min) {
      this.values.min = min;
      this.v$.$touch();
      if (!this.v$.$error) {
        this.$emit('updateOptions', this.values);
      }
    }
  }
}
</script>

<style>
.rule-max-count-row, .rule-min-count-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-max-count-row input, .rule-min-count-row input {
  width: 300px;
}

.rule-max-count-row label, .rule-min-count-row label {
  display: block;
  margin-bottom: 2px;
}
</style>