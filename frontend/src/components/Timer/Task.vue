<template>
  <div class="task">
    <span>{{ this.$duration.durationMomentToString(duration) }} - {{ title }}</span>
    <span>
      <button @click="incrementTime(1, 'm')">+</button>
      <button @click="decrementTime(1, 'm')">-</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["title", "duration", "running", "completed"],
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
    // addTime() {},
    // subtractTime() {},
    incrementTime(amount, denomination) {
      if (!(typeof denomination == "string"))
        throw "incrementTime time denomination must be string";
      // 60000 ms is one minute
      this.$emit("update:duration", this.duration.add(amount, denomination));
    },
    decrementTime(amount, denomination) {
      if (!(typeof denomination == "string"))
        throw "decrementTime time denomination must be string";

      let zeroDuration = this.$moment.duration(0);
      /*
      Check if duration is zero (timer has been reached),
      <= instead of == because the user could subtractTime when less than a minute
      */
      if (
        this.duration.hours() <= zeroDuration.hours() &&
        this.duration.minutes() <= zeroDuration.minutes() &&
        this.duration.seconds() <= zeroDuration.seconds()
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
      this.timer = setInterval(() => this.decrementTime(1, "s"), 10);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
