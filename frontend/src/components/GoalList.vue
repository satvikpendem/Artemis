<template>
  <div class="goal-list">
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
  </div>
</template>

<script>
import GoalItem from "@/components/GoalItem.vue";

export default {
  name: "GoalList",
  data() {
    return {
      goals: {
        today: "",
        week: "",
        month: "",
        quarter: ""
      }
    };
  },
  components: {
    GoalItem
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

<style scoped>
#later-timespans {
  display: flex;
  padding-top: 100px;
  justify-content: space-around;
  align-items: center;
}

.test {
  width: 100px;
  height: 100px;
  background-color: red;
}

.today {
  padding-top: 20vh;
}
</style>

<style>
.goal-list-class h1 {
  font-size: 2rem;
}

.goal-list-class p,
.goal-list-class input,
.goal-list-class form {
  font-size: 2rem;
  width: 25vw;
}
</style>
