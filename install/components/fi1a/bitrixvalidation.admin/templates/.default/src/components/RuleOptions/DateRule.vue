<template>
  <div class="rule-date-row">
    <label for="format">{{$t('date.format')}}</label>
    <input placeholder="d.m.Y H:i:s" :disabled="!$root.canEdit()" id="format" type="text" :value="values.format" @input="setFormat($event.target.value)">
  </div>
</template>

<script>

export default {
  name: "DateRule",

  emits: ['updateOptions'],

  props: {
    options: Object
  },

  data() {
    let values = Object.assign({
      format: null
    }, this.options)
    return {
      values
    }
  },

  mounted() {
    this.$emit('updateOptions', this.values);
  },

  methods: {
    setFormat(format) {
      this.values.format = format;
      this.$emit('updateOptions', this.values);
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
</style>