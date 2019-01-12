<template>
  <div id="app">
    <task-list/>
  </div>
</template>

<script>
// import TaskView from "@/views/TaskView.vue";
import TaskList from "@/components/Timer/TaskList.vue";

export default {
  name: "app",
  components: {
    TaskList
  }
};
</script>

<style>
/* #app {
  Colors

  Main
  --background-color: #fff;
  --main-color: #fff;
  --accent-color: #5200ff;

  Text
  --text-color: #282828;
  --text-color-opposite: #fff;

  Body
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;

  font-family: "Inter UI", sans-serif;
  font-weight: 700;
  color: var(--text-color);
} */
</style>
