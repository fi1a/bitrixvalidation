<template>
  <div class="spinner-container">
    <div v-if="!loading">
      <template v-for="(items, key) in entities">
        <h2>{{$t('list.' + key)}}</h2>
        <TableList :entities="items" @select="$emit('select', $event);"/>
      </template>
    </div>
    <Spinner :loading="loading"/>
  </div>
</template>

<script>

import api from "../api/api";

import TableList from './../components/TableList.vue';
import Spinner from './../components/Spinner.vue';

export default {
  name: "List",

  components: {TableList, Spinner},

  emits: ['select'],

  data() {
    return {
      loading: true,
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
        this.loading = false;
      })
    }
  }
}
</script>
