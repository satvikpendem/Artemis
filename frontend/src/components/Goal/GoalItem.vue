<template>
  <div class="goal-item">
    <h1>{{ goal.description }}</h1>
    <form v-if="isEditing" @submit.prevent="setGoal" @keydown.escape="setGoal">
      <input
        type="text"
        v-model="editField"
        v-focus
        :placeholder="placeholder"
        class="goal-field"
        @blur="setGoal"
      >
    </form>
    <div v-else @click="isEditing = true">
      <p v-if="editField">{{ editField }}</p>
      <p v-else class="placeholder-field">{{ placeholder }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoalItem",
  props: ["goal"],
  data() {
    return {
      editField: "",
      isEditing: false,
      placeholder: "I want to..."
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  mounted() {
    this.getGoal(this.goal.timespan);
  },
  methods: {
    fieldEdit() {
      if (this.editField) this.editField = "";
      else this.editField = "Edited"; // should not reach this case
    },
    getGoal(timespan) {
      chrome.storage.sync.get(timespan, obj => {
        this.editField = obj[timespan];
      });
    },
    setGoal() {
      this.isEditing = false;
      let timespan = this.goal.timespan;
      chrome.storage.sync.set({ [timespan]: this.editField }, null);
    }
  }
};
</script>

<style scoped>
.goal-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 60px;
  font-weight: 700;
  text-transform: capitalize;
}

input,
p {
  padding: 0;
  margin: 0;
  width: 75vw;

  font-family: inherit;
  font-weight: 400;
  font-size: 3rem;

  text-align: center;
  border: none;
  box-shadow: none;
  outline: none;
}

.placeholder-field {
  color: gray;
}
</style>
