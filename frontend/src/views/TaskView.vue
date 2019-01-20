<template>
  <div id="task-view">
    <main-header/>
    <task-list/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

import TaskList from "@/components/Task/TaskList.vue";

export default {
  name: "task-view",
  components: {
    MainHeader,
    TaskList
  }
};
</script>

<style scoped>
</style> 