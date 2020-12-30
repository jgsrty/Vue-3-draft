<template>
  <div>
    {{title}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      title:'Home title'
    }
  },
})
</script>

<style scoped lang="scss">

</style>