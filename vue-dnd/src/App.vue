<template>
  <div id="app">
    <DragList category="todo"/>
    <DragList category="complete"/>
  </div>
</template>

<script>
import DragList from "./components/DragList.vue";

export default {
  name: "app",
  components: {
    DragList
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
