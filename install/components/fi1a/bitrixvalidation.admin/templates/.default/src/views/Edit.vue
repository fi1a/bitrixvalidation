<template>
  <div v-if="!loading">
    <div class="adm-detail-block">
      <div class="adm-detail-content-wrap">
        <div class="adm-detail-content">
          <div class="adm-detail-title">{{entity.entity_type_name}}: <template v-if="entity.type_name">{{entity.type_name}} / </template>{{entity.name}}</div>
          <div class="adm-detail-content-item-block">
            <div class="add-field">
              <select v-model="fieldId">
                <option></option>
                <option v-for="field in this.fields" :value="field.id">{{field.name}}</option>
              </select>
              <input :disabled="!fieldId" v-on:click.prevent="addRule(fieldId); fieldId = null;" type="button" :value="$t('edit.addRule')" :title="$t('edit.addRuleTitle')" class="adm-btn-save">
            </div>
            <hr>
            <div class="groups">
              <Group v-for="(group, index) in entity.groups" :group="group" @delete="deleteGroup(index)" />
            </div>
          </div>
        </div>
        <div class="adm-detail-content-btns-wrap">
          <div class="adm-detail-content-btns">
            <input type="submit" :value="$t('edit.save')" :title="$t('edit.saveTitle')" class="adm-btn-save">
            <input type="submit" :value="$t('edit.apply')" :title="$t('edit.applyTitle')">
            <input v-on:click.prevent="$emit('cancel')" type="button" :value="$t('edit.cancel')" :title="$t('edit.cancelTitle')">
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
import Group from './../components/Group.vue';

export default {
  name: "Edit",

  props: {
    entityKey: Object,
  },

  components: {Spinner, Group},

  data() {
    return {
      loading: true,
      entity: null,
      fieldId: null
    };
  },

  computed: {
    fields() {
      let fieldIds = [];
      this.entity.groups.forEach((group) => {
        fieldIds.push(group.id);
      })
      let fields = [];
      this.entity.fields.forEach((field) => {
        if (fieldIds.indexOf(field.id) === -1) {
          fields.push(field);
        }
      })

      return fields;
    }
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
    },
    addRule(fieldId) {
      let field = null;
      this.entity.fields.forEach((item) => {
        if (item.id === fieldId) {
          field = item;
        }
      })
      if (field) {
        this.entity.groups.unshift(
          Object.assign(
            {
              rules: [
                {
                  key: null,
                  options: {},
                }
              ]
            },
            field
          )
        );
      }
    },
    deleteGroup(index) {
      this.entity.groups.splice(index, 1);
    }
  }
}
</script>

<style>
.add-field {
  margin-bottom: 30px;
}

.add-field select {
  min-width: 500px;
}

.groups {
  margin-top: 30px;
}

.adm-workarea .add-field .adm-btn-save {
  margin-left: 20px;
}
</style>