<template>
  <div id="task-view">
    <main-header/>
    <!-- <task-list/> -->
    <main id="task-container">
      <to-do/>
      <current/>
      <completed/>
    </main>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

// import TaskList from "@/components/Task/TaskList.vue";

import ToDo from "@/components/Task/ToDo.vue";
import Current from "@/components/Task/Current.vue";
import Completed from "@/components/Task/Completed.vue";

export default {
  name: "task-view",
  components: {
    MainHeader,
    // TaskList,
    ToDo,
    Current,
    Completed
  }
};
</script>

<style scoped>
#task-container {
  display: flex;
  justify-content: space-evenly;
  height: 90vh;
}
</style> 