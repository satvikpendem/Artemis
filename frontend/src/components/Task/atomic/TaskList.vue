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
    <template v-for="task in tasks">
      <TaskListItem :key="task.id" :task="task"/>
    </template>
  </div>
</template>

<script>
import TaskListItem from "@/components/Task/atomic/TaskListItem";

export default {
  name: "TaskList",
  components: { TaskListItem },
  computed: {
    tasks() {
      return this.$store.state.tasks.todo;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
