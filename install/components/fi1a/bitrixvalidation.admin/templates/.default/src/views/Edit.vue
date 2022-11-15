<template>
  <div v-if="!loading">
    <div class="adm-detail-block">
      <div class="adm-detail-content-wrap">
        <div class="adm-detail-content">
          <div class="adm-detail-title">{{entity.entity_type_name}}: <template v-if="entity.type_name">{{entity.type_name}} / </template>{{entity.name}}</div>
          <div class="adm-detail-content-item-block">


          </div>
        </div>
        <div class="adm-detail-content-btns-wrap">
          <div class="adm-detail-content-btns">
            <input type="submit" value="Сохранить" title="Сохранить и вернуться" class="adm-btn-save">
            <input type="submit" value="Применить" title="Сохранить и остаться в форме">
            <input v-on:click.prevent="$emit('cancel')" type="button" value="Отменить" title="Не сохранять и вернуться">
          </div>
        </div>
      </div>
    </div>
  </div>
  <Spinner :loading="loading"/>
</template>

<script>

import api from "./../api/api";

import Spinner from './../components/Spinner.vue';

export default {
  name: "Edit",

  props: {
    entityKey: Object,
  },

  components: {Spinner},

  data() {
    return {
      loading: true,
      entity: null,
    };
  },

  mounted() {
    this.load();
  },

  methods: {
    load() {
      api.getEntity(this.entityKey).then((response) => {
        this.entity = response.data.entity;
        this.loading = false;
      })
    }
  }
}
</script>