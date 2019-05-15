<template>
  <div class="goal-list" :class="{ dark: darkMode }">
    <div class="today">
      <GoalItem id="current-timespan" :goal="zip(goals)[0]"/>
    </div>
    <div id="later-timespans">
      <GoalItem
        v-bind:key="goal.id"
        v-for="goal in zip(goals).slice(1)"
        :goal="goal"
        class="goal-list-class"
      />
    </div>
    <Toggle @toggleMode="handleToggle"/>
  </div>
</template>

<script>
import GoalItem from "@/components/GoalItem.vue";
import Toggle from "@/components/Toggle.vue";

export default {
  name: "GoalList",
  data() {
    return {
      goals: {
        today: "",
        week: "",
        month: "",
        quarter: "",
        year: ""
      },
      darkMode: false
    };
  },
  components: {
    GoalItem,
    Toggle
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
        case "year":
          return "This " + val + ",";
        default:
          return "Description";
      }
    },
    handleToggle(data) {
      this.darkMode = data;
    }
  }
};
</script>

<style scoped>
.goal-list {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  transition: var(--t-speed);
}

.dark {
  background-color: black;
  color: white;
}

#later-timespans {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
}
</style>

<style>
.goal-list-class h1 {
  font-size: 2rem;
}

.goal-list-class input,
.goal-list-class p {
  font-size: 2rem;
  width: 25vw;
}

.dark input {
  color: white;
  background-color: black;
}
</style>
