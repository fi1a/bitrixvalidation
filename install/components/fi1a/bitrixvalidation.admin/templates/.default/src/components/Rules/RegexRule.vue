<template>
  <div class="rule-regex-row">
    <label for="regex">{{$t('regex.regex')}}</label>
    <input id="regex" type="text" :value="values.regex" @input="setRegex($event.target.value)">
    <p v-if="v$.values.regex.$invalid" class="error">
      <template v-if="v$.values.regex.required.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import RuleMixin from './../../mixins/RuleMixin.vue';

export default {
  name: "RegexRule",

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
      regex: ''
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
        regex: {
          required
        }
      }
    }
  },

  methods: {
    setRegex(regex) {
      this.values.regex = regex;
      this.v$.$touch();
      if (!this.v$.values.regex.$error) {
        this.$emit('updateOptions', {regex: regex});
      }
    }
  }
}
</script>

<style>
.rule-regex-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-regex-row input {
  width: 300px;
}

.rule-regex-row label {
  display: block;
  margin-bottom: 2px;
}
</style>