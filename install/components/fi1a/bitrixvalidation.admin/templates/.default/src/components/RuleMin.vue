<template>
  <div class="rule-min-row">
    <label for="min">{{$t('min.min')}}</label>
    <input id="min" type="text" :value="values.min" @input="setMin($event.target.value)">
    <p v-if="v$.values.min.$invalid" class="error">
      <template v-if="v$.values.min.integer.$invalid">
        {{$t('errors.integer')}}
      </template>
      <template v-else-if="v$.values.min.required.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, integer } from '@vuelidate/validators'

export default {
  name: "RuleMin",

  setup () {
    return {
      v$: useVuelidate()
    }
  },

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

  validations () {
    return {
      values: {
        min: {
          required, integer
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