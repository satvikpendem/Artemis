<template>
  <div id="task-list-item">
    <span id="duration">{{ task.duration }}</span>
    <span id="title">{{ task.title }}</span>
    <button @click="deleteTask(task.id)">-</button>
  </div>
</template>

<script>
export default {
  name: "TaskListItem",
  props: {
    task: {
      type: Object
    }
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
    }
  }
};
</script>

<style scoped>
#duration {
  color: white;
  background-color: var(--accent-color);
  border-radius: 5px;
  padding: 0.5rem;
}

#title {
  padding-left: 10px;
}

.task-item {
  margin: 0;
  padding: 1rem 0;
  display: flex;
  align-items: stretch;
  overflow-x: scroll;
}
</style>
