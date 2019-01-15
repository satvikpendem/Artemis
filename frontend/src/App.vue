<template>
  <div id="app">
    <task-view/>
  </div>
</template>

<script>
import TaskView from "@/views/TaskView.vue";
// import TaskList from "@/components/Task/TaskList.vue";

export default {
  name: "app",
  components: {
    TaskView
  }
};
</script>

<style>
#app {
  /* Colors */

  /* Main */
  --background-color: #fff;
  --main-color: #fff;
  --accent-color: #5200ff;

  /* Text */
  --text-color: #282828;
  --text-color-opposite: #fff;
}
</style>
