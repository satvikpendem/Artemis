<template>
  <div id="task-list-item">
    <span id="duration">{{ task.duration }}</span>
    <span id="title">{{ task.title }}</span>
    <AtomicButton class="taskButton" @click.native="deleteTask">-</AtomicButton>
    <AtomicButton class="taskButton" @click.native="completeTask">&#x2713;</AtomicButton>
  </div>
</template>

<script>
import AtomicButton from "@/components/_global/_atomic/AtomicButton.vue";

export default {
  name: "TaskListItem",
  props: {
    task: {
      type: Object
    }
  },
  components: {
    AtomicButton
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id);
    }
  }
};
</script>

<style scoped>
#task-list-item {
  margin-bottom: 1rem;
}

#duration {
  color: white;
  background-color: var(--accent-color);
  border-radius: 5px;
  padding: 0.5rem;
}

#title {
  padding-left: 10px;
}

.taskButton {
  margin-left: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
}

/* #task-list-item {
  margin: 0;
  padding: 1rem 0;
  display: flex;
  align-items: stretch;
  overflow-x: scroll;
} */
</style>
