import { reactive } from "vue";
// 分配新任务
export function distributeMission(missions) {
  let newItem = reactive({
    id: "",
    title: "",
  });
  function addNewMission() {
    let obj = Object.assign({}, newItem);
    missions.push(obj);
    newItem.id = "";
    newItem.title = "";
  }
  return { newItem, addNewMission };
}
// 完成任务
export function completeMission() {
  let missions = reactive([
    {
      id: 0,
      title: "level up 10",
    },
    {
      id: 1,
      title: "level up 20",
    },
    {
      id: 101,
      title: "level up 101",
    },
    {
      id: 12,
      title: "level up 202",
    },
  ]);
  function missionCompleted(ind) {
    missions.splice(ind, 1);
  }
  return { missions, missionCompleted };
}
