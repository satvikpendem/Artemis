<template>
  <div id="task-list">
    <template v-for="task in sourceList">
      <TaskListItem :key="task.id" :task="task" :reverse="reverse"/>
    </template>
  </div>
</template>

<script>
import TaskListItem from "@/components/Task/atomic/TaskListItem";

export default {
  name: "TaskList",
  props: {
    sourceList: { type: Array },
    reverse: { type: Boolean, default: false }
  },
  components: { TaskListItem }
};
</script>

<style scoped>
</style>
