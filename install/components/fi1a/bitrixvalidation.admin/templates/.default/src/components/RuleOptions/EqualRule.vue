<template>
  <div class="rule-max-row">
    <label for="equal">{{$t('equal.equal')}}</label>
    <input :disabled="!$root.canEdit()" id="equal" type="text" :value="values.equal" @input="setMax($event.target.value)">
    <p v-if="v$.values.equal.$invalid" class="error">
      <template v-if="v$.values.equal.decimal.$invalid">
        {{$t('errors.decimal')}}
      </template>
      <template v-else-if="v$.values.equal.required.$invalid">
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
  name: "EqualRule",

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
      equal: 0
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
        equal: {
          required, decimal
        }
      }
    }
  },

  methods: {
    setMax(equal) {
      this.values.equal = equal;
      this.v$.$touch();
      if (!this.v$.values.equal.$error) {
        this.$emit('updateOptions', {equal: equal});
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