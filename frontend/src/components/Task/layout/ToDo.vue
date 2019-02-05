<template>
  <div class="to-do">
    <span id="to-do-label">To-Do</span>
    <task-list/>
    <add-task-form/>
  </div>
</template>

<script>
import TaskList from "@/components/Task/atomic/TaskList";
import AddTaskForm from "@/components/Task/atomic/AddTaskForm";

export default {
  name: "to-do",
  props: ["tasks"],
  components: {
    TaskList,
    AddTaskForm
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
