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
    <section v-if="readableCurrentTask">
      <button v-if="!timerRunning" @click="controlTimerPlay">
        <img
          class="timer-state-button"
          src="@/../public/assets/img/controls/play.svg"
          alt="play_button"
        >
      </button>
      <button v-else @click="controlTimerPlay">
        <img
          class="timer-state-button"
          src="@/../public/assets/img/controls/pause.svg"
          alt="pause_button"
        >
      </button>
    </section>
    <section id="time-buttons" v-if="readableCurrentTask">
      <div id="add-time-buttons">
        <button class="time-increment-button" @click="incrementTime(1 ,'m')">+1</button>
        <button class="time-increment-button" @click="incrementTime(5 ,'m')">+5</button>
        <button class="time-increment-button" @click="incrementTime(10 ,'m')">+10</button>
      </div>
      <button id="complete-button" @click="completeTask">Complete</button>
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "current",
  computed: {
    ...mapGetters([
      "readableCurrentTask",
      "taskListLength",
      "readableTotalTime"
    ]),
    ...mapState(["timerRunning"])
  },
  methods: {
    controlTimerPlay() {
      if (!this.timerRunning) this.$store.dispatch("startTimer");
      else this.$store.dispatch("pauseTimer");
    },
    completeTask() {
      this.$store.dispatch("completeTask");
    },
    incrementTime(timeValue, timeType) {}
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

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
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

.timer-state-button {
  width: 3rem;
}

#time-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#add-time-buttons {
  display: flex;
  justify-content: space-between;
  width: 35vw;
}

.time-increment-button {
  font-style: italic;
  font-size: 2rem;
  padding: 3rem 0;
  transition: 0.25s;
}

.time-increment-button:hover {
  font-style: italic;
  font-size: 3rem;
  padding: 1rem 0;
  transition: 0.25s;
}

#complete-button {
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  transition: 0.25s;
}

#complete-button:hover {
  background-color: var(--accent-color);
  color: var(--text-color-opposite);
  transition: 0.25s;
}
</style>