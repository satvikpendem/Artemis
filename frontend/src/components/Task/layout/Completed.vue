<template>
  <div id="completed">
    <span id="completed-label">Completed</span>
    <TaskList id="task-list" :sourceList="complete" :reverse="true"/>
  </div>
</template>

<script>
import TaskList from "@/components/Task/atomic/TaskList";

export default {
  name: "completed",
  components: {
    TaskList
  },
  computed: {
    complete() {
      return this.$store.getters.readable(
        this.$store.getters.taskFilter("complete"),
        "all"
      );
    }
  }
};
</script>

<style>
#completed {
  text-align: right;
  margin: 4rem 4rem 0 0;
  padding: 0;
}

#completed-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1vw);
}
</style>
