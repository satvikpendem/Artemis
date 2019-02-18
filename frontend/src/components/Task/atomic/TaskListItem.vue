<template>
  <div id="task-list-item">
    <div class="task">
      <span id="duration">{{ task.duration }}</span>
      <span id="title">{{ task.title }}</span>
    </div>
    <AtomicButton id="task-button" @click.native="deleteTask">&#x2718;</AtomicButton>
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
    }
  }
};
</script>

<style scoped>
#task-list-item {
  margin-bottom: 1rem;
  display: flex;
  text-align: left;
}

.reverse {
  flex-direction: row-reverse;
}

#duration {
  color: white;
  background-color: var(--accent-color);
  border-radius: 5px;
  padding: 0.5rem;
  font-variant-numeric: tabular-nums;
}

#title {
  padding-left: 10px;
  max-height: 5rem;
  display: inline-block;
  overflow: auto;
}

.task {
  display: flex;
  max-width: 100%;
  align-items: center;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

#task-button {
  opacity: 0;
  margin-left: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: 0.25s;
}

#task-list-item:hover #task-button {
  opacity: 1;
  transition: 0.25s;
}
</style>
