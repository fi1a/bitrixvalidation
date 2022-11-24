<template>
  <div class="rule-max-row">
    <label for="max">{{$t('max.max')}}</label>
    <input id="max" type="text" :value="values.max" @input="setMax($event.target.value)">
    <p v-if="v$.values.max.$invalid" class="error">
      <template v-if="v$.values.max.decimal.$invalid">
        {{$t('errors.decimal')}}
      </template>
      <template v-else-if="v$.values.max.required.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, decimal } from '@vuelidate/validators'
import RuleMixin from './../../mixins/RuleMixin.vue';

export default {
  name: "MaxRule",

  setup () {
    return {
      v$: useVuelidate()
    }
  },

  mixins: [RuleMixin],

  emits: ['updateOptions'],

  props: {
    options: Object
  },

  data() {
    let values = Object.assign({
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
        max: {
          required, decimal
        }
      }
    }
  },

  methods: {
    setMax(max) {
      this.values.max = max;
      this.v$.$touch();
      if (!this.v$.values.max.$error) {
        this.$emit('updateOptions', {max: max});
      }
    }
  }
}
</script>

<style>
.rule-max-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-max-row input {
  width: 300px;
}

.rule-max-row label {
  display: block;
  margin-bottom: 2px;
}
</style>