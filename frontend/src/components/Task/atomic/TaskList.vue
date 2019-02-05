<template>
  <div class="task-list">
    <!-- <task-item
      v-for="(task, index) in tasks"
      :key="index"
      :title.sync="task.title"
      :duration.sync="task.duration"
      :running.sync="task.running"
      :completed.sync="task.completed"
      @completeTask="moveTaskToCompleted"
    />-->
    <div v-for="task in tasks" :key="task.id">{{ task.title }}</div>
  </div>
</template>

<script>
// import TaskItem from "@/components/Task/atomic/TaskItem";

export default {
  name: "task-list",
  // components: { TaskItem },
  computed: {
    tasks() {
      return this.$store.state.tasks.todo;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
