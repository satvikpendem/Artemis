<template>
  <div id="task-list">
    <draggable v-model="sourceList">
      <template v-for="task in sourceList">
        <TaskListItem :key="task.id" :task="task" :reverse="reverse"/>
      </template>
    </draggable>

    <!-- <template v-for="task in sourceList">
      <TaskListItem :key="task.id" :task="task" :reverse="reverse"/>
    </template>-->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskListItem from "@/components/Task/atomic/TaskListItem";

export default {
  name: "TaskList",
  props: {
    sourceList: { type: Array },
    reverse: { type: Boolean, default: false }
  },
  components: { TaskListItem, draggable },
  computed: {
    computedList: {
      get() {
        return this.$store.getters.taskFilter(sourceList);
      },
      set(value) {
        this.$store.dispatch("updateList", value);
      }
    }
  }
};
</script>

<style scoped>
.draggable {
  width: 300px;
  background-color: red;
  padding: 20px;
  user-select: none;
}
</style>
