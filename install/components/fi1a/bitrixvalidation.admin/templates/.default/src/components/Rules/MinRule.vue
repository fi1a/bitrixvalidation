<template>
  <div class="rule-min-row">
    <label for="min">{{$t('min.min')}}</label>
    <input id="min" type="text" :value="values.min" @input="setMin($event.target.value)">
    <p v-if="v$.values.min.$invalid" class="error">
      <template v-if="v$.values.min.decimal.$invalid">
        {{$t('errors.decimal')}}
      </template>
      <template v-else-if="v$.values.min.required.$invalid">
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
  name: "MinRule",

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
      min: 0
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
          required, decimal
        }
      }
    }
  },

  methods: {
    setMin(min) {
      this.values.min = min;
      this.v$.$touch();
      if (!this.v$.values.min.$error) {
        this.$emit('updateOptions', {min: min});
      }
    }
  }
}
</script>

<style>
.rule-min-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-min-row input {
  width: 300px;
}

.rule-min-row label {
  display: block;
  margin-bottom: 2px;
}
</style>