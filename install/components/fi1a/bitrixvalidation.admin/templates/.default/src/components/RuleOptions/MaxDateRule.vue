<template>
  <div class="rule-date-row">
    <label for="maxDateMaxDate">{{$t('maxDate.maxDate')}}</label>
    <div class="adm-input-wrap adm-input-wrap-calendar">
      <input class="adm-input adm-input-calendar" :disabled="!$root.canEdit()" id="maxDateMaxDate" type="text" :value="values.maxDate" @input="setMaxDate($event.target.value)">
      <span class="adm-calendar-icon" :title="$t('maxDate.showCalendarTitle')" @click.prevent="showCalendar($event.target, 'setMaxDate')"></span>
    </div>
    <p v-if="v$.values.maxDate.$invalid" class="error">
      <template v-if="v$.values.maxDate.required.$invalid">
        {{$t('errors.required')}}
      </template>
    </p>
  </div>
  <div class="rule-date-row">
    <label for="formatMaxDate">{{$t('betweenDate.format')}}</label>
    <input placeholder="d.m.Y H:i:s" :disabled="!$root.canEdit()" id="formatMaxDate" type="text" :value="values.format" @input="setFormat($event.target.value)">
  </div>
</template>

<script>

import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import RuleMixin from "../../mixins/RuleMixin.vue";
import moment from "moment";

export default {
  name: "MaxDateRule",

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
      maxDate: null,
      format: null
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
        maxDate: {
          required
        }
      }
    }
  },

  methods: {
    setFormat(format) {
      this.values.format = format;
      this.v$.$touch();
      if (!this.v$.$error) {
        this.$emit('updateOptions', this.values);
      }
    },

    setMaxDate(maxDate) {
      this.values.maxDate = maxDate;
      this.v$.$touch();
      if (!this.v$.$error) {
        this.$emit('updateOptions', this.values);
      }
    },

    showCalendar(target, setter) {
      window.BX.calendar({
        node: target,
        field: target,
        bTime: true,
        callback_after: (equalDate) => {
          let format = 'd.m.Y H:i:s';
          if (this.values.format) {
            format = this.values.format;
          }

          this[setter](moment(equalDate).format(this.$toMomentFormat(format)));
        }
      });
    }
  }
}
</script>

<style>
.rule-date-row {
  min-height: 60px;
  vertical-align: top;
}

.rule-date-row input {
  width: 300px;
}

.rule-date-row label {
  display: block;
  margin-bottom: 2px;
}

#bx-admin-prefix .rule-date-row .adm-input-wrap-calendar {
  width: 100%;
}
</style>