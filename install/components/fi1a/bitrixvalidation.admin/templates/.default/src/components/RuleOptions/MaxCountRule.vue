<template>
  <div class="rule-max-count-row">
    <label for="max">{{$t('maxCount.max')}}</label>
    <input :disabled="!$root.canEdit()" id="max" type="text" :value="values.max" @input="setMax($event.target.value)">
    <p v-if="v$.values.max.$invalid" class="error">
      <template v-if="v$.values.max.integer.$invalid">
        {{$t('errors.integer')}}
      </template>
      <template v-else-if="v$.values.max.required.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required, integer } from '@vuelidate/validators'
import RuleMixin from './../../mixins/RuleMixin.vue';

export default {
  name: "MaxCountRule",

  setup () {
    return {
      v$: useVuelidate()
    }
  },

  mixins: [RuleMixin],

  props: {
    options: Object
  },

  emits: ['updateOptions'],

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
          required, integer
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
.rule-max-count-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-max-count-row input {
  width: 300px;
}

.rule-max-count-row label {
  display: block;
  margin-bottom: 2px;
}
</style>