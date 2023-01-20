<template>
  <div class="group">
    <h3>{{group.name}}</h3>
    <template v-if="group.multiple">
      <h4>{{$t('edit.multiple')}}</h4>
      <table class="internal">
        <tbody>
        <tr class="heading">
          <td class="col-rule">{{$t('edit.rule')}}</td>
          <td>{{$t('edit.options')}}</td>
          <td class="col-rule">{{$t('edit.message')}}</td>
          <td class="col-rule">{{$t('edit.sort')}}</td>
          <td v-if="$root.canEdit()" class="col-delete">{{$t('edit.delete')}}</td>
        </tr>
        <tr v-if="!sortedGroupMultipleRules.length"><td colspan="4" class="empty-rules">{{$t('edit.emptyRules')}}</td></tr>
        <Rule v-for="(rule, index) in sortedGroupMultipleRules" :rule="rule" :group="group" :rules="rulesByMultipleType" :groupRules="group.multiple_rules" @delete="deleteMultipleRule(index)"/>
        </tbody>
      </table>
      <input v-if="$root.canEdit()" :disabled="this.group.multiple_rules.length === rulesByMultipleType.length" v-on:click.prevent="addMultipleRule()" type="submit" :title="$t('edit.add')" class="adm-btn-save" :value="$t('edit.add')">
    </template>
    <h4>{{$t('edit.notMultiple')}}</h4>
    <table class="internal">
      <tbody>
      <tr class="heading">
        <td class="col-rule">{{$t('edit.rule')}}</td>
        <td>{{$t('edit.options')}}</td>
        <td class="col-rule">{{$t('edit.message')}}</td>
        <td class="col-rule">{{$t('edit.sort')}}</td>
        <td v-if="$root.canEdit()" class="col-delete">{{$t('edit.delete')}}</td>
      </tr>
      <tr v-if="!sortedGroupRules.length"><td colspan="4" class="empty-rules">{{$t('edit.emptyRules')}}</td></tr>
      <Rule v-for="(rule, index) in sortedGroupRules" :rule="rule" :group="group" :rules="rulesByType" :groupRules="group.rules" @delete="deleteRule(index)"/>
      </tbody>
    </table>
    <input v-if="$root.canEdit()" :disabled="this.group.rules.length === rulesByType.length" v-on:click.prevent="addRule()" type="submit" :title="$t('edit.add')" class="adm-btn-save" :value="$t('edit.add')">
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
    rulesByMultipleType() {
      let rules = [];
      this.rules.forEach((rule) => {
        if (rule.types.indexOf('multiple') !== -1) {
          rules.push(rule);
        }
      });

      return rules;
    },
    sortedGroupRules() {
      return this.group.rules.sort((a, b) => {
        return a.sort - b.sort;
      })
    },
    sortedGroupMultipleRules() {
      return this.group.multiple_rules.sort((a, b) => {
        return a.sort - b.sort;
      })
    }
  },

  methods: {
    deleteRule(index) {
      this.group.rules.splice(index, 1);
      if (!this.group.rules.length && (!this.group.multiple || !this.group.multiple_rules.length)) {
        this.$emit('delete');
      }
    },
    deleteMultipleRule(index) {
      this.group.multiple_rules.splice(index, 1);
      if (!this.group.rules.length && (!this.group.multiple || !this.group.multiple_rules.length)) {
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
      let rule = this.$parent.getEmptyRule(this.group.id, this.entity, false);
      rule.key = key;

      this.group.rules.push(rule)
    },
    addMultipleRule() {
      let existing = [];
      this.group.multiple_rules.forEach((rule) => {
        existing.push(rule.key)
      })

      let key = null;
      if (existing.length + 1 === this.rulesByMultipleType.length) {
        this.rulesByMultipleType.forEach((rule) => {
          if (existing.indexOf(rule.key) === -1) {
            key = rule.key;
          }
        })
      }
      let rule = this.$parent.getEmptyRule(this.group.id, this.entity, true);
      rule.key = key;

      this.group.multiple_rules.push(rule)
    }
  }
}
</script>

<style>
.group {
  margin-bottom: 30px;
  background: #fff;
  padding: 10px 30px 30px 30px;
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

.empty-rules {
  font-style: italic;
}
</style>