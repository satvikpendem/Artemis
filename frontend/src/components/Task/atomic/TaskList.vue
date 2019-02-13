<template>
  <div id="task-list">
    <template v-for="task in readableTaskList">
      <TaskListItem :key="task.id" :task="task"/>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TaskListItem from "@/components/Task/atomic/TaskListItem";

export default {
  name: "TaskList",
  components: { TaskListItem },
  computed: {
    ...mapGetters(["readableTaskList"])
    // taskList() {
    //   return this.$store.getters.readableTaskList;
    // }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
