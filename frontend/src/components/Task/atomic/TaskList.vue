<template>
  <div id="task-list">
    <template v-for="task in taskList">
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
    taskList() {
      return this.$store.getters.taskList;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#task-list {
}
</style>
