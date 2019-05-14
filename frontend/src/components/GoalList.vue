<template>
  <div class="goal-list">
    <template v-for="goal in zip(goals)">
      <GoalItem v-bind:key="goal.id" :goal="goal"/>
    </template>
  </div>
</template>

<script>
import GoalItem from "@/components/GoalItem.vue";

export default {
  name: "GoalList",
  data() {
    return {
      goals: {
        today: "a",
        week: "b",
        month: "c",
        quarter: "d"
      }
    };
  },
  components: {
    GoalItem,
  },
  methods: {
    zip(obj) {
      let describe = this.describe;
      return Object.entries(obj).map(arr => ({
        timespan: arr[0],
        description: describe(arr[0]),
        value: arr[1]
      }));
    },
    describe: val => {
      switch (val) {
        case "today":
          return "Today,";
        case "week":
        case "month":
        case "quarter":
          return "This " + val + ",";
        default:
          return "Description";
      }
    }
  }
};
</script>

<style>
.goal-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>