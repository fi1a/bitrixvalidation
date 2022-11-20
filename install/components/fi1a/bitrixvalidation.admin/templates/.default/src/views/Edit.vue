<template>
  <div class="spinner-container">
    <div v-if="errors.length" class="adm-info-message-wrap adm-info-message-red">
      <div class="adm-info-message">
        <div class="adm-info-message-title">Ошибка</div>
        <template v-for="error in errors">
          {{error.message}}<br>
        </template>
        <br>
        <div class="adm-info-message-icon"></div>
      </div>
    </div>
    <div v-if="success.length" class="adm-info-message-wrap adm-info-message-green">
      <div class="adm-info-message">
        <div class="adm-info-message-title">Успешно</div>
        <template v-for="item in success">
          {{item.message}}<br>
        </template>
        <br>
        <div class="adm-info-message-icon"></div>
      </div>
    </div>
    <div v-if="entity">
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
                <Group :key="group.id" v-for="(group, index) in entity.groups" :group="group" :entity="entity" :rules="rules" @delete="deleteGroup(index)" />
                <div class="empty-groups" v-if="!entity.groups.length">{{$t('edit.emptyGroups')}}</div>
              </div>
            </div>
          </div>
          <div class="adm-detail-content-btns-wrap">
            <div class="adm-detail-content-btns">
              <input :disabled="isDisabled" v-on:click.prevent="save()" type="submit" :value="$t('edit.save')" :title="$t('edit.saveTitle')" class="adm-btn-save">
              <input :disabled="isDisabled" v-on:click.prevent="apply()" type="submit" :value="$t('edit.apply')" :title="$t('edit.applyTitle')">
              <input v-on:click.prevent="$emit('cancel')" type="button" :value="$t('edit.cancel')" :title="$t('edit.cancelTitle')">
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner :loading="loading && !errors.length"/>
  </div>
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

  emits: ['cancel'],

  data() {
    return {
      loading: true,
      entity: null,
      rules: [],
      fieldId: null,
      errors: [],
      success: [],
      validation: {}
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
    },
    isDisabled() {
      let disabled = false;
      Object.values(this.validation).forEach((group) => {
        Object.values(group).forEach((error) => {
          if (error) {
            disabled = true;
          }
        })
      });

      return disabled;
    }
  },

  mounted() {
    this.load();
  },

  watch: {
    entity: {
      handler(newValue) {
        this.errors = [];
        this.success = [];
      },
      deep: true,
    }
  },

  methods: {
    getEmptyRule(fieldId, entity, multiple) {
      return {
        key: null,
        options: {},
        sort: 500,
        id: null,
        field_id: fieldId,
        entity_type: entity.entity_type,
        entity_id: entity.id,
        multiple: multiple,
      }
    },
    load() {
      api.getEntity(this.entityKey).then((response) => {
        let entity = response.data.entity;
        entity.groups = Object.values(entity.groups);
        for (let index in entity.groups) {
          entity.groups[index].rules = Object.values(entity.groups[index].rules);
          if (!entity.groups[index].rules.length) {
            entity.groups[index].rules.push(this.getEmptyRule(entity.groups[index].id, entity, false));
          }
          entity.groups[index].multiple_rules = Object.values(entity.groups[index].multiple_rules);
          if (!entity.groups[index].multiple_rules.length) {
            entity.groups[index].multiple_rules.push(this.getEmptyRule(entity.groups[index].id, entity, true));
          }
        }
        entity.fields = Object.values(entity.fields);
        this.rules = response.data.rules;
        this.loading = false;
        this.entity = Object.assign({}, entity);
      }).catch((response) => {
        this.errors = response.errors;
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
                this.getEmptyRule(field.id, this.entity, false)
              ],
              multiple_rules: [
                this.getEmptyRule(field.id, this.entity, true)
              ]
            },
            field
          )
        );
      }
    },
    deleteGroup(index) {
      this.entity.groups.splice(index, 1);
    },
    save() {
      this.errors = [];
      this.submit().then(() => {
        this.success = [{message: "Правила успешно сохранены"}];
        this.loading = false;
        this.$emit('cancel');
      });
    },
    apply() {
      this.errors = [];
      this.submit().then(() => {
        this.success = [{message: "Правила успешно сохранены"}];
        this.loading = false;
      });
    },
    submit() {
      let rules = [];
      this.loading = true;
      this.entity.groups.forEach((group) => {
        group.rules.forEach((rule) => {
          if (rule.key) {
            rules.push(rule);
          }
        });
        group.multiple_rules.forEach((rule) => {
          if (rule.key) {
            rules.push(rule);
          }
        });
      })

      return api.submit(this.entity.entity_type, this.entity.id, rules).catch((response) => {
        this.success = [];
        this.errors = response.errors;
        this.loading = false;
      });
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

.groups .empty-groups {
  font-style: italic;
  margin-bottom: 20px;
}
</style>