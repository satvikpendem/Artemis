<template>
  <div class="task-item">
    <span v-if="!this.completed">{{ this.$duration.durationMomentToString(duration) }} - {{ title }}</span>
    <span v-else>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["title", "duration", "running", "completed"],
  data() {
    return {
      timer: null,
      originalTime: null, // keep track of allocated time as duration counts down
      zeroDuration: this.$moment.duration(0)
    };
  },
  mounted() {
    this.originalTime = this.duration;
  },
  watch: {
    running() {
      if (this.running) this.startTimer();
      else this.pauseTimer();
    }
  },
  methods: {
    incrementTime(amount, denomination) {
      if (typeof denomination != "string")
        throw "incrementTime time denomination must be a string";

      let newDuration = this.duration.add(amount, denomination);
      this.originalTime = newDuration;
      this.$emit("update:duration", newDuration);
    },
    decrementTime(amount, denomination) {
      if (typeof denomination != "string")
        throw "decrementTime time denomination must be a string";

      /*
      Check if duration is zero (timer has been reached),
      <= instead of == because the user could subtractTime when less than a minute
      */
      if (
        this.duration.hours() <= this.zeroDuration.hours() &&
        this.duration.minutes() <= this.zeroDuration.minutes() &&
        this.duration.seconds() <= this.zeroDuration.seconds()
      ) {
        this.$emit("update:completed", true);
        this.$emit("completeTask");
      } else
        this.$emit(
          "update:duration",
          this.duration.subtract(amount, denomination)
        );
    },
    deleteTask() {},
    startTimer() {
      // 1000 ms is one minute
      this.timer = setInterval(() => this.decrementTime(1, "s"), 10);
    },
    pauseTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
