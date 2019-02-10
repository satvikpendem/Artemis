<template>
  <div id="task-list-item-add">
    <!-- For adding tasks, use <form @submit.prevent="handleSubmit"> -->
    <form id="task-list-item-add-form" @submit.prevent="addTask">
      <input id="title-input" type="text" placeholder="Title" v-model="newTaskTitle">
      <input
        id="duration-input"
        type="text"
        placeholder="Duration (ex. 8:00, 15m, 4h30)"
        v-model="newTaskDuration"
      >
      <AtomicButton id="task-add-button" type="submit">Submit</AtomicButton>
    </form>
  </div>
</template>

<script>
import AtomicButton from "@/components/_global/_atomic/AtomicButton.vue";

export default {
  name: "TaskListItemAdd",
  data() {
    return {
      newTaskTitle: "",
      newTaskDuration: ""
    };
  },
  components: {
    AtomicButton
  },
  methods: {
    async addTask() {
      try {
        await this.$store.dispatch("addTask", {
          title: this.newTaskTitle,
          duration: this.newTaskDuration
        });
        this.newTaskTitle = "";
        this.newTaskDuration = "";
      } catch (error) {
        alert(
          "Please enter a valid duration in HH:MM (10:15, 4:30, or :45) or XhYm (6h30, or 30m) format. Thanks!"
        );
        this.newTaskDuration = "";
      }
    }
  }
};
</script>

<style scoped>
#task-list-item-add-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-between;
  padding: 3rem 0;
}

input {
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 5px solid var(--text-color-disabled);

  padding: 2rem, 0;
  margin-bottom: 10px;

  font-size: 1rem;
  font-weight: 700;

  width: 250px;

  transition: 100ms;
  transition-timing-function: ease-in-out;
}

input:focus {
  border-bottom: 5px solid var(--accent-color);
}

#task-add-button {
  margin-top: 2rem;
}
</style>
