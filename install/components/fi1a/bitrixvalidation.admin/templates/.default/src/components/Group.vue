<template>
  <div class="group">
    <h3>{{group.name}}</h3>
    <table class="internal">
      <tbody>
      <tr class="heading">
        <td class="col-rule">{{$t('edit.rule')}}</td>
        <td>{{$t('edit.options')}}</td>
        <td class="col-rule">{{$t('edit.sort')}}</td>
        <td class="col-delete">{{$t('edit.delete')}}</td>
      </tr>
      <Rule v-for="(rule, index) in sortedGroupRules" :rule="rule" :group="group" :rules="rules" @delete="deleteRule(index)"/>
      </tbody>
    </table>
    <input :disabled="this.group.rules.length === rulesByType.length" v-on:click.prevent="addRule()" type="submit" :title="$t('edit.add')" class="adm-btn-save" :value="$t('edit.add')">
  </div>
</template>

<script>

import Rule from "./Rule.vue";

export default {
  name: "Group",

  components: {Rule},

  props: {
    group: Object,
    entity: Object,
    rules: Array,
  },

  data() {
    return {
      // rules: [
      //   {
      //     title: this.$t('rules.min'),
      //     key: 'min',
      //     type: 'number'
      //   },
      //   {
      //     title: this.$t('rules.max'),
      //     key: 'max',
      //     type: 'number'
      //   }
      // ],
    }
  },

  computed: {
    rulesByType() {
      let rules = [];
      this.rules.forEach((rule) => {
        if (rule.types.indexOf(this.group.type) !== -1) {
          rules.push(rule);
        }
      });

      return rules;
    },
    sortedGroupRules() {
      return this.group.rules.sort((a, b) => {
        return a.sort - b.sort;
      })
    }
  },

  methods: {
    deleteRule(index) {
      this.group.rules.splice(index, 1);
      if (!this.group.rules.length) {
        this.$emit('delete');
      }
    },
    addRule() {
      let existing = [];
      this.group.rules.forEach((rule) => {
        existing.push(rule.key)
      })

      let key = null;
      if (existing.length + 1 === this.rulesByType.length) {
        this.rulesByType.forEach((rule) => {
          if (existing.indexOf(rule.key) === -1) {
            key = rule.key;
          }
        })
      }

      this.group.rules.push({
        key: key,
        options: {},
        sort: 500,
        id: null,
        field_id: this.group.id,
        entity_type: this.entity.entity_type,
        entity_id: this.entity.id,
      })
    }
  }
}
</script>

<style>
.group {
  margin-bottom: 30px;
}

.internal {
  width: 100%;
}

.adm-workarea .heading td {
  text-align: left !important;
}

.col-delete, .col-rule {
  width: 1px;
}

.adm-workarea .group .adm-btn-save {
  margin-top: 10px;
}
</style>