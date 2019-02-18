<template>
  <div id="to-do">
    <span id="to-do-label">To-Do</span>
    <span id="no-tasks" v-if="todoLength <= 0">No tasks here, add them below</span>
    <TaskList :sourceList="todo"/>
    <TaskListItemAdd/>
  </div>
</template>

<script>
import TaskList from "@/components/Task/atomic/TaskList";
import TaskListItemAdd from "@/components/Task/atomic/TaskListItemAdd";

export default {
  name: "to-do",
  components: {
    TaskList,
    TaskListItemAdd
  },
  computed: {
    todo() {
      return this.$store.getters.readable(
        this.$store.getters.taskFilter("todo"),
        "all"
      );
    },
    todoLength() {
      return this.$store.getters.taskLength("todo");
    }
  }
};
</script>

<style scoped>
#to-do {
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 4rem;
  padding: 0;
}
#to-do-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1vw);
}

#no-tasks {
  color: var(--text-color-disabled);
}
</style>
