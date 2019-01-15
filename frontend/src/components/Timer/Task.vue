<template>
  <div class="task">
    <span>{{ this.$duration.durationMomentToString(duration) }} - {{ title }}</span>
    <span>
      <button @click="incrementTime">+</button>
      <button @click="decrementTime">-</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["title", "duration", "running"],
  data() {
    return {
      timer: null,
      zeroDuration: this.$moment.duration(0)
    };
  },
  watch: {
    running() {
      if (this.running) this.startTimer();
    }
  },
  methods: {
    incrementTime() {
      // 60000 ms is one minute
      this.$emit("update:duration", this.duration.add(1, "s"));
    },
    decrementTime() {
      let zeroDuration = this.$moment.duration(0);
      // check if duration is zero (timer has been reached)
      if (
        this.duration.hours() == zeroDuration.hours() &&
        this.duration.minutes() == zeroDuration.minutes() &&
        this.duration.seconds() == zeroDuration.seconds()
      ) {
        this.$emit("completeTimer");
      }
      // 60000 ms is one minute
      else this.$emit("update:duration", this.duration.subtract(1, "s"));
    },
    deleteTask() {},
    startTimer() {
      this.timer = setInterval(() => this.decrementTime(), 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
