<template>
  <div v-if="!loading">
    rules {{entity.id}} {{entity.type}}
  </div>
  <Spinner :loading="loading"/>
</template>

<script>

import Spinner from './../components/Spinner.vue';

export default {
  name: "Edit",

  props: {
    entity: Object,
  },

  components: {Spinner},

  data() {
    return {
      loading: true
    };
  }
}
</script>