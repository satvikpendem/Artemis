<template>
  <div id="task-view">
    <task-list/>
  </div>
</template>

<script>
import TaskList from "@/components/Task/TaskList.vue";

export default {
  name: "task-view",
  components: {
    TaskList
  }
};
</script>

<style scoped>
main {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
