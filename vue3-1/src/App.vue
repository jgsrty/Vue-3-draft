<template>
  <span v-for="(item, ind) in todoList" :key="ind">
    <button @click="getItem(ind)">{{ item }}</button>
  </span>
  <p>Picked：{{ pickedItem }}</p>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    const data = reactive({
      todoList: ["vue", "react", "typescript", "vue3", "vite"],
      pickedItem: "",
      getItem: (ind: number) => {
        data.pickedItem = data.todoList[ind];
      },
    });
    const refData = toRefs(data);
    return { ...refData };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
