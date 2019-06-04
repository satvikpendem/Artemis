<template>
  <div id="app">
    <EventList class="event-list"/>
    <!-- <EventList class="event-list"/> -->
    <Container/>
  </div>
</template>

<script>
import EventList from "./components/EventList.vue";
import Container from "./components/Container.vue";
// import Calendar from "./components/Calendar.vue";

export default {
  name: "app",
  components: {
    EventList,
    Container
    // Calendar
  }
};
</script>

<style>
#app {
  display: flex;
  min-width: 100%;
}
</style>
