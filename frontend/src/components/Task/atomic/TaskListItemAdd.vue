<template>
  <div id="task-list-item-add">
    <!-- For adding tasks, use <form @submit.prevent="handleSubmit"> -->
    <form @submit.prevent="addTask">
      <input id="title-input" type="text" placeholder="Title" v-model="newTaskTitle">
      <input
        id="duration-input"
        type="text"
        placeholder="Duration (ex. 8:00, 15m, 4h30)"
        v-model="newTaskDuration"
      >
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// import TaskButton from "@/components/Task/atomic/TaskButton";

export default {
  name: "TaskListItemAdd",
  data() {
    return {
      newTaskTitle: "",
      newTaskDuration: ""
    };
  },
  methods: {
    addTask() {
      // TODO: Error handling, validate input
      this.$store.dispatch("addTask", {
        title: this.newTaskTitle,
        duration: this.newTaskDuration
      });
      this.newTaskTitle = "";
      this.newTaskDuration = "";
    }
  }
};
</script>

<style scoped>
</style>
