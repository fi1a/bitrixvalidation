<template>
  <div>
    <Table v-if="!this.entityId" @select="entityRules($event)"/>
    <Rules v-else-if="this.entityId" :entityId="this.entityId"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entityId: null,
    }
  },
  mounted() {
    const urlParams = new URL(document.URL);
    this.entityId = urlParams.searchParams.get('entityId');

    window.onpopstate = (event) => {
      let entityId = null;
      if (event.state) {
        entityId = event.state.entityId;
      }

      this.entityId = entityId;
    };
  },
  methods: {
    entityRules(entityId) {
      this.entityId = entityId;
      let urlParams = new URL(document.URL);
      urlParams.searchParams.delete('entityId');
      urlParams.searchParams.append('entityId', entityId);
      history.pushState({entityId}, '', urlParams.toString())
    }
  }
}
</script>

<style scoped>
.main-grid-cell-head {
  cursor: default;
}
.main-grid-resize-button {
  opacity: 1;
  cursor: default;
}

html:not(.bx-firefox) .main-grid-resize-button::after,
html:not(.bx-firefox) .main-grid-resize-button:after {
  height: 50000px;
  opacity: 1;
}
</style>
