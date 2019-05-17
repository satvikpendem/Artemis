<template>
  <div class="goal-list" :class="{ dark: IS_DARK_THEME }">
    <div class="today">
      <GoalItem id="current-timespan" :goal="zip(goals)[0]"/>
    </div>
    <div class="later-timespans">
      <GoalItem
        v-bind:key="goal.id"
        v-for="goal in zip(goals).slice(1)"
        :goal="goal"
        class="goal-list-class"
      />
    </div>
  </div>
</template>

<script>
import GoalItem from "@/components/Goal/GoalItem.vue";
import Toggle from "@/components/_Global/Toggle.vue";

import { mapGetters } from "vuex";

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
      }
    };
  },
  components: {
    GoalItem
  },
  computed: {
    ...mapGetters(["IS_DARK_THEME"])
  },
  created() {
    this.getTheme();
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
    }
  }
};
</script>

<style scoped>
.goal-list {
  display: flex;
  flex-direction: column;
  flex: 1; /* to allow GoalList to use remaining space from Header */
  justify-content: space-around;
  align-items: center;
}

.later-timespans {
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: baseline;
}

.dark {
  background-color: black;
  color: white;
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
