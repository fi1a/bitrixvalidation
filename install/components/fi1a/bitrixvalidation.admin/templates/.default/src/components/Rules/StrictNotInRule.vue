<template>
  <div class="rule-not-in-row">
    <label for="in">{{$t('strictNotIn.notIn')}}</label>
    <div class="rule-not-in" v-for="(find, index) in v$.values.notIn.$model">
      <input class="value" type="text" v-model.trim="find.value" :key="index"><input v-if="values.notIn.length > 1" class="delete" v-on:click.prevent="deleteItem(index)" type="button" title="X" value="X">
    </div>
    <p v-if="v$.values.notIn.multipleRequired.$invalid && v$.values.$dirty" class="error">
      <template v-if="v$.values.notIn.multipleRequired.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
    <input v-on:click.prevent="addItem()" type="button" :title="$t('edit.add')" :value="$t('edit.add')">
  </div>
</template>

<script>

import { useVuelidate } from '@vuelidate/core'
import RuleMixin from './../../mixins/RuleMixin.vue';
import {multipleRequired} from '../../validations/multipleRequired';

export default {
  name: "StrictNotInRule",

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
    let optionValues = [];

    if (typeof this.options.notIn !== "undefined") {
      this.options.notIn.forEach((item) => {
        optionValues.push({
          value: item,
        });
      });
    } else {
      optionValues.push({
        value: ''
      });
    }

    return {
      values: {
        notIn: optionValues
      }
    }
  },

  mounted() {
    let values = [];
    this.values.notIn.forEach((item) => {
      values.push(item.value)
    });

    this.$emit('updateOptions', {notIn: values});
  },

  validations () {
    return {
      values: {
        notIn: {
          multipleRequired
        }
      }
    }
  },

  methods: {
    addItem() {
      this.values.notIn.push({
        value: ''
      });
    },
    deleteItem(index) {
      if (this.values.notIn.length > 1) {
        this.values.notIn.splice(index, 1);
      }
    }
  },

  watch: {
    values: {
      handler() {
        this.v$.$touch();
        if (!this.v$.$error) {
          let values = [];
          this.values.notIn.forEach((item) => {
            values.push(item.value)
          });
          this.$emit('updateOptions', {notIn: values});
        }
      },
      deep: true,
    }
  }
}
</script>

<style>
.rule-not-in-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-not-in-row .rule-not-in input.value {
  width: 260px;
}

.rule-not-in-row .rule-not-in input.delete {
  margin-left: 10px;
}

.rule-not-in-row label {
  display: block;
  margin-bottom: 2px;
}

.rule-not-in-row .rule-not-in {
  margin-bottom: 10px;
}
</style>