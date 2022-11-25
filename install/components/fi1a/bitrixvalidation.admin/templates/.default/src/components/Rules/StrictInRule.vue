<template>
  <div class="rule-in-row">
    <label for="in">{{$t('strictIn.in')}}</label>
    <div class="rule-in" v-for="(find, index) in v$.values.in.$model">
      <input class="value" type="text" v-model.trim="find.value" :key="index"><input v-if="values.in.length > 1" class="delete" v-on:click.prevent="deleteItem(index)" type="button" title="X" value="X">
    </div>
    <p v-if="v$.values.in.multipleRequired.$invalid && v$.values.$dirty" class="error">
      <template v-if="v$.values.in.multipleRequired.$invalid">
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
  name: "StrictInRule",

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

    if (typeof this.options.in !== "undefined") {
      this.options.in.forEach((item) => {
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
        in: optionValues
      }
    }
  },

  mounted() {
    this.$emit('updateOptions', this.values);
  },

  validations () {
    return {
      values: {
        in: {
          multipleRequired
        }
      }
    }
  },

  methods: {
    addItem() {
      this.values.in.push({
        value: ''
      });
    },
    deleteItem(index) {
      if (this.values.in.length > 1) {
        this.values.in.splice(index, 1);
      }
    }
  },

  watch: {
    values: {
      handler() {
        this.v$.$touch();
        if (!this.v$.$error) {
          let values = [];
          this.values.in.forEach((item) => {
            values.push(item.value)
          });
          this.$emit('updateOptions', {in: values});
        }
      },
      deep: true,
    }
  }
}
</script>

<style>
.rule-in-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-in-row .rule-in input.value {
  width: 260px;
}

.rule-in-row .rule-in input.delete {
  margin-left: 10px;
}

.rule-in-row label {
  display: block;
  margin-bottom: 2px;
}

.rule-in-row .rule-in {
  margin-bottom: 10px;
}
</style>