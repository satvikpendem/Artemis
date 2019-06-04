<template>
  <div class="calendar" @dragover.prevent @drop="dragDrop"></div>
</template>

<script>
import EventList from "./EventList.vue";

export default {
  name: "Calendar",
  props: ["event"],
  data() {
    return {
      events: []
    };
  },
  components: {
    EventList
  },
  methods: {
    dragDrop(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
