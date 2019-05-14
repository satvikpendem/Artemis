<template>
  <div class="goal-item">
    <h1>{{ goal.description }}</h1>
    <form v-if="isEditing" @submit.prevent="setGoal" @keydown.escape="setGoal">
      <input type="text" v-model="editField" @blur="setGoal" v-focus :placeholder="placeholder">
    </form>
    <div v-else class="goal-field" @click="isEditing = true">
      <span v-if="editField" class="edit-field">{{ editField }}</span>
      <span v-else class="placeholder-field">{{ placeholder }}</span>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
form,
.goal-field,
.edit-field {
  font-family: inherit;
  font-weight: 400;
  font-size: 40px;

  width: 50vw;
  max-height: 50vh;

  text-align: center;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  outline: none;
}

.placeholder-field {
  color: gray;
}
</style>
