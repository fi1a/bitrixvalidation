<template>
  <div v-if="loaded">
    <template v-for="(items, key) in entities">
      <h2>{{$t('list.' + key)}}</h2>
      <TableList :entities="items" @select="$emit('select', $event);"/>
    </template>
  </div>
</template>

<script>

import api from "../api/api";

import TableList from './../components/TableList.vue';

export default {
  name: "List",

  components: {TableList},

  data() {
    return {
      loaded: false,
      entities: {},
    };
  },

  mounted() {
    this.load();
  },

  methods: {
    load() {
      api.getList().then((response) => {
        this.entities = response.data;
        this.loaded = true;
      })
    }
  }
}
</script>