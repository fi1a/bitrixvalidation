<template>
</template>

<script>

export default {
  name: "EmailRule",

  props: {
    options: Object
  },

  emits: ['updateOptions'],

  data() {
    let values = Object.assign({}, this.options);

    return {
      values
    }
  },

  mounted() {
    this.$emit('updateOptions', this.values);
  }
}
</script>