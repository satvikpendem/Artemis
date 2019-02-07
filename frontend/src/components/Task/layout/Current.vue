<template>
  <div id="current">
    <div></div>
    <!-- <div class="col current-task-col">
      <section class="current-task" v-if="isTasks">
        <span class="current-task-title">{{ this.tasks[0].title }}</span>
        <span
          class="current-task-duration"
        >{{ this.$duration.durationMomentToString(this.tasks[0].duration) }}</span>
      </section>
      <section class="current-task" v-else>
        <span class="current-task-duration">00:00:00</span>
      </section>

      <div class="total-time-content">
        <p id="totalTimeString">{{ totalTimeString }}</p>
        <p id="totalTimeLabel">Total Time</p>
      </div>

      <button v-if="this.tasks.length > 0 && !this.isTimerStarted" @click="controlTimerPlay">
        <img src="@/../public/assets/img/controls/play.svg" alt="play_button">
      </button>
      <button v-if="this.tasks.length > 0 && this.isTimerStarted" @click="controlTimerPlay">
        <img src="@/../public/assets/img/controls/pause.svg" alt="pause_button">
      </button>

      <template v-if="this.tasks.length > 0">
        <div class="add-time-buttons">
          <button class="time-increment-button" @click="incrementTime(1 ,'m')">+1</button>
          <button class="time-increment-button" @click="incrementTime(5 ,'m')">+5</button>
          <button class="time-increment-button" @click="incrementTime(10 ,'m')">+10</button>
        </div>

        <button class="complete-button" @click="moveTaskToCompleted">Complete</button>
      </template>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "current",
  computed: {
    currentTask() {
      return this.$store.getters.currentTask;
    },
    taskListLength() {
      return this.$store.getters.taskListLength;
    }
  }
};
</script>

<style>
.current {
  text-align: center;
  background: green;
}
#current-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1.5vw);
}
/* font-variant-numeric: tabular-nums */
</style>