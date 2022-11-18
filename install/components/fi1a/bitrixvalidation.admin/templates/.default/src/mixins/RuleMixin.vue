<script>
export default {
  data() {
    return {
      _id: Math.random(),
    }
  },

  watch: {
    values: {
      handler(value) {
        const ruleComponent = this.$parent,
            editComponent = this.$parent.$parent.$parent;

        if (typeof editComponent.$data.validation[ruleComponent.group.id] === "undefined") {
          editComponent.$data.validation[ruleComponent.group.id] = {};
        }
        editComponent.$data.validation[ruleComponent.group.id][this._id] = this.v$.$invalid;
      },
      deep: true
    }
  },

  beforeUnmount() {
    const groupComponent = this.$parent,
        editComponent = this.$parent.$parent.$parent;

    if (
        typeof editComponent.$data.validation[groupComponent.group.id] !== "undefined"
        && typeof editComponent.$data.validation[groupComponent.group.id][this._id] !== "undefined"
    ) {
      editComponent.$data.validation[groupComponent.group.id][this._id] = false;
    }
  }
}
</script>