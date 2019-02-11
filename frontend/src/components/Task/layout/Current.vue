<template>
  <div id="current">
    <section class="current-task" v-if="readableCurrentTask">
      <span class="current-task-title">{{ readableCurrentTask.title }}</span>
      <span class="current-task-duration">{{ readableCurrentTask.duration }}</span>
    </section>
    <section class="current-task" v-else>
      <span class="current-task-duration">00:00:00</span>
    </section>
    <section class="total-time-content">
      <p id="readableTotalTime">{{ readableTotalTime }}</p>
      <p id="totalTimeLabel">Total Time</p>
    </section>
    <button v-if="taskListLength > 0" @click="controlTimerPlay">
      <img src="@/../public/assets/img/controls/play.svg" alt="play_button">
    </button>
    <button v-if="taskListLength > 0" @click="controlTimerPlay">
      <img src="@/../public/assets/img/controls/pause.svg" alt="pause_button">
    </button>
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
    },
    readableTotalTime() {
      return this.$store.getters.readableTotalTime;
    }
  }
};
</script>

<style>
#current {
  margin-top: 4rem;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.current-task {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.current-task-title {
  /* font-size: 2vw; */
  font-size: calc(1rem + 1vw);
  margin: 1rem;
  font-weight: 700;
  color: var(--accent-color);
  height: calc(5rem + 1vw);
  overflow: auto;
}

.current-task-duration {
  /* TODO: Adjust font sizing for responsive */
  font-size: calc(4rem + 2vw);
  font-variant-numeric: tabular-nums;
}

.current-task-title,
.current-task-duration {
  /* overflow-x: scroll; */
}

.total-time-content {
  color: var(--text-color-disabled);
  margin-bottom: 3rem;
}

.total-time-content #readableTotalTime {
  font-size: calc(1rem + 2vw);
  font-variant-numeric: tabular-nums;
  margin-bottom: 0;
}

.total-time-content #totalTimeLabel {
  font-size: calc(0.5rem + 1vw);
  text-align: center;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
</style>