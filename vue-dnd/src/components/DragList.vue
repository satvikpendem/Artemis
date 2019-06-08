<template>
  <div class="drag-list" @dragover.prevent @drop.prevent>
    <button @click="addEvent('test')">Add Task</button>
    <div class="list-items">
      <li
        v-for="(event, index) of eventList"
        @drop.prevent="placeEvent($event, index)"
        :key="event.id"
      >
        <Drag :event="event" @alignment="alignmentFun"/>
      </li>
    </div>
  </div>
</template>

<script>
import Drag from "./Drag.vue";

// TODO add class object for dragover animation
// TODO blog post about drag and drop
// DONE add hover zones to figure out if user wants to add event before or after another
// TODO add drop event to main .drag-list div
export default {
  name: "DragList",
  props: ["category"],
  components: {
    Drag
  },
  data() {
    return {
      alignment: null
    };
  },
  computed: {
    eventList() {
      return this.$store.getters.eventFilter(this.category);
    }
  },
  methods: {
    placeEvent(e, index, alignment) {
      let id = e.dataTransfer.getData("id");
      this.$store.dispatch("changeCategory", {
        eventID: id,
        toIndex: index,
        toCategory: this.category,
        alignment: this.alignment
      });
    },
    addEvent(title) {
      this.$store.dispatch("addEvent", {
        title: title,
        category: this.category
      });
    },
    alignmentFun(option) {
      if (option != this.alignment) this.alignment = option;
    }
  }
};
</script>

<style>
.drag-list {
  background-color: gray;
  width: 500px;
  height: 500px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list-items {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
}
</style>