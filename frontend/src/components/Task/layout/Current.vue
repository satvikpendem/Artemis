<template>
  <div id="current">
    <section class="current-task" v-if="readableCurrentTask">
      <span class="current-task-title">{{ readableCurrentTask.title }}</span>
      <span class="current-task-duration">{{ readableCurrentTask.duration }}</span>
    </section>
    <section class="current-task" v-else>
      <span class="current-task-duration">00:00:00</span>
    </section>
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
    readableCurrentTask() {
      return this.$store.getters.readableCurrentTask;
    },
    taskListLength() {
      return this.$store.getters.taskListLength;
    }
  }
};
</script>

<style>
#current {
  margin-top: 4rem;
  padding: 0;
}
/* #current-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1.5vw);
} */

.current-task {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.current-task-title {
  font-size: 2vw;
  margin: 1rem;
  font-weight: 700;
  color: var(--accent-color);
  height: 5vw;
  overflow: auto;
}

.current-task-duration {
  font-size: 8vw;
}

.current-task-title,
.current-task-duration {
  /* overflow-x: scroll; */
}
</style>