<template>
  <div class="to-do">
    <span id="to-do-label">To-Do</span>
    <task-list :tasks="tasks"/>
    <!-- <add-task-input></add-task-input> -->
    <!-- <task-button></task-button> -->
  </div>
</template>

<script>
import TaskList from "@/components/Task/atomic/TaskList";

export default {
  name: "to-do",
  props: ["tasks"],
  components: {
    TaskList
  }
};
</script>

<style scoped>
.to-do {
  text-align: center;
  background: red;
}
#to-do-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1.5vw);
}
</style>
