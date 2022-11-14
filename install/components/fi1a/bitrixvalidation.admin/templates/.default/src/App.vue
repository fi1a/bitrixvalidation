<template>
  <div>
    <List v-if="!this.entity.id" @select="edit($event)"/>
    <Edit v-else :entity="this.entity"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entity: {
        id: null,
        type: null,
      }
    }
  },

  mounted() {
    const urlParams = new URL(document.URL);
    this.entity = {
      id: urlParams.searchParams.get('id'),
      type: urlParams.searchParams.get('type'),
    };

    window.onpopstate = (event) => {
      let entity = {
        id: null,
        type: null,
      };
      if (event.state) {
        entity = event.state;
      }

      this.entity = entity;
    };
  },

  methods: {
    edit(select) {
      this.entity = select;
      let urlParams = new URL(document.URL);
      urlParams.searchParams.delete('id');
      urlParams.searchParams.delete('type');
      urlParams.searchParams.append('id', select.id);
      urlParams.searchParams.append('type', select.type);
      history.pushState({id: this.entity.id, type: this.entity.type}, '', urlParams.toString())
    }
  }
}
</script>

<style scoped>

</style>
