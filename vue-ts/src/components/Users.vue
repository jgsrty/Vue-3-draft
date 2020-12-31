<template>
  <div>userName={{ username }}</div>
  <button @click="setUsername('rty')">改变username</button>
  <div>{{ getUsername() }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface User {
  username: string;
  age: number;
  setUsername(username: string): void;
  getUsername(): string;
}

export default defineComponent({
  setup() {
    let user: User = reactive({
      username: "张三",
      age: 20,
      setUsername(val) {
        this.username = val;
      },
      getUsername() {
        return this.username;
      },
    });

    return {
      ...toRefs(user),
    };
  },
});
</script>

<style scoped></style>
