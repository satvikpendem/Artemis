<template>
  <div id="to-do">
    <!-- <section id="task-main"> -->
    <span id="to-do-label">To-Do</span>
    <TaskList/>
    <TaskListItemAdd/>
    <!-- </section> -->
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
}
#to-do-label {
  margin-bottom: 2rem;
  font-size: calc(2rem + 1vw);
}
</style>
