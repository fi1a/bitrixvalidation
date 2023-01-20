<template>
  <div class="rule-min-count-row">
    <label for="minCount">{{$t('minCount.min')}}</label>
    <input :disabled="!$root.canEdit()" id="minCount" type="text" :value="values.min" @input="setMin($event.target.value)">
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
import RuleMixin from './../../mixins/RuleMixin.vue';

export default {
  name: "MinCountRule",

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
.rule-min-count-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-min-count-row input {
  width: 300px;
}

.rule-min-count-row label {
  display: block;
  margin-bottom: 2px;
}
</style>