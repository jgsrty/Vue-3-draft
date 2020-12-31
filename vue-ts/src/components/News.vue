<template>
  <ul>
    <li v-for="item in 20" :key="item">
      <router-link :to="`/content?id=${item}`">第{{ item }}条news</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
