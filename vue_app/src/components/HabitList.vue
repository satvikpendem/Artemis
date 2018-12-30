<template>
  <div class="habit-list">
    <HabitItem
      v-for="habit in habits"
      :title="habit.title"
      :max_value="habit.max_value"
      v-bind:key="habit.id"
    />
  </div>
</template>

<script>
import HabitItem from "./HabitItem";

export default {
  name: "HabitList",
  components: { HabitItem },
  data() {
    return {
      habits: [
        { title: "Brush teeth", max_value: 2 },
        { title: "Read" },
        { title: "Drink water", max_value: 10 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
