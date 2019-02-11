<template>
  <div id="to-do">
    <span id="to-do-label">To-Do</span>
    <TaskList/>
    <TaskListItemAdd/>
  </div>
</template>

<script>
import TaskList from "@/components/Task/atomic/TaskList";
import TaskListItemAdd from "@/components/Task/atomic/TaskListItemAdd";

export default {
  name: "to-do",
  props: ["tasks"],
  components: {
    TaskList,
    TaskListItemAdd
  }
};
</script>

<style scoped>
#to-do {
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 4rem;
  padding: 0;
}
#to-do-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1vw);
}
</style>
