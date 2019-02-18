<template>
  <div id="task-list">
    <template v-for="task in sourceList">
      <TaskListItem :key="task.id" :task="task" v-bind:class="classes"/>
    </template>
  </div>
</template>

<script>
import TaskListItem from "@/components/Task/atomic/TaskListItem";

export default {
  name: "TaskList",
  props: {
    sourceList: { type: Array },
    classes: {
      type: String
    }
  },
  components: { TaskListItem }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
