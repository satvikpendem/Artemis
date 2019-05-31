<template>
  <div id="app">
    <EventList/>
  </div>
</template>

<script>
import EventList from "./components/EventList.vue";

export default {
  name: "app",
  components: {
    EventList
  }
};
</script>

<style>
#app {
  display: flex;
  min-width: 100%;
}
</style>
