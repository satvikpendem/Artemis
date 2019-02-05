<template>
  <div id="add-task-form">
    <!-- For adding tasks, use <form @submit.prevent="handleSubmit"> -->
    <!-- <task-button></task-button>     -->
    <form @submit.prevent="addTask">
      <input id="title-input" type="text" placeholder="Title" v-model="newTaskTitle">
      <input
        id="duration-input"
        type="text"
        placeholder="Duration (8:00, 15m, 4h30)"
        v-model="newTaskDuration"
      >
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// import TaskButton from "@/components/Task/atomic/TaskButton";

export default {
  name: "add-task-form",
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
