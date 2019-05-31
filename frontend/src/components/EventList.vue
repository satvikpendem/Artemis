<template>
  <div class="event-list">
    <div v-for="event in events" v-bind:key="event.id">
      <Event :event.sync="event"/>
    </div>
  </div>
</template>

<script>
import Event from "./Event.vue";

export default {
  name: "EventList",
  data() {
    return {
      events: [
        { title: "test1", length: 60 },
        { title: "test2", length: 60 },
        { title: "test3", length: 60 }
      ]
    };
  },
  components: {
    Event
  }
};
</script>

<style>
</style>
