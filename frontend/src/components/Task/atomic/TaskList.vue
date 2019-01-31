<template>
  <div class="task-list">TaskList
    <task-item
      v-for="(task, index) in tasks"
      :key="index"
      :title.sync="task.title"
      :duration.sync="task.duration"
      :running.sync="task.running"
      :completed.sync="task.completed"
      @completeTask="moveTaskToCompleted"
    />
  </div>
</template>

<script>
import TaskItem from "@/components/Task/atomic/TaskItem";
export default {
  name: "task-list",
  props: ["tasks"],
  components: { TaskItem },
  // data() {
  //   return {};
  // },
  mounted() {
    console.log(this.$props.tasks);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
