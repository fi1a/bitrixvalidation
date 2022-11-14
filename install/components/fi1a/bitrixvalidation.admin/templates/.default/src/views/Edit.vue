<template>
  <div>
    rules {{entity.id}} {{entity.type}}
  </div>
</template>

<script>
export default {
  name: "Rules",

  props: {
    entity: Object,
  }
}
</script>