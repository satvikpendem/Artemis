<template>
  <div class="event-list" @drop.prevent="dropFun" @dragover.prevent>
    <!-- <template v-for="event of events" :dragged="drop"> -->
    <template v-for="event of events">
      <Event :event.sync="event" v-bind:key="event.key" @dragged="drop"/>
    </template>
  </div>
</template>

<script>
import Event from "./Event.vue";

export default {
  name: "EventList",
  data() {
    return {
      events: [
        { id: 1, title: "test1", length: 60 },
        { id: 2, title: "test2", length: 60 },
        { id: 3, title: "test3", length: 60 }
      ],
      droppable: false,
      TEMP_ELEMENT: null
    };
  },
  components: {
    Event
  },
  methods: {
    dropListen(e) {
      e.preventDefault();
      // this.droppable = true;
      // if (this.TEMP_ELEMENT) {
      //   this.events.push({
      //     id: this.TEMP_ELEMENT.id,
      //     title: this.TEMP_ELEMENT.title,
      //     length: this.TEMP_ELEMENT.length
      //   });
      // }
      console.log("dropListen");
    },
    drop(e) {
      // this.TEMP_ELEMENT = e;
    },
    drag() {
      console.log("dragging");
    }
  }
};
</script>

<style>
.event-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
