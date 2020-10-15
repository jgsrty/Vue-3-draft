<template>
  <div>
    <div>
      <p>ID：<input type="text" v-model="newItem.id" /></p>
      <p>任务名：<input type="text" v-model="newItem.title" /></p>
      <button @click="addNewMission">添加新任务</button>
    </div>
    <ol>
      <li v-for="(item, ind) in missions" :key="ind">
        {{ item.title }}
        <button @click="missionCompleted(ind)">完成</button>
      </li>
    </ol>
  </div>
</template>

<script>
import { distributeMission, completeMission } from "./todoList";
export default {
  setup() {
    let { missions, missionCompleted } = completeMission();
    let { newItem, addNewMission } = distributeMission(missions);
    return { missions, missionCompleted, newItem, addNewMission };
  },
};
</script>
