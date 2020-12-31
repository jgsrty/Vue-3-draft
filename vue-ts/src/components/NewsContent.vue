<template>
  <div>
    news
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
  },
});
</script>

<style scoped></style>
