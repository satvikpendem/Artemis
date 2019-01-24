<template>
  <div class="task-list">
    <div class="flex-grid">
      <div class="col to-do-col">
        <span class="to-do-label">To-Do</span>
        <div class="task-gen-list" v-for="(task) in tasks" v-bind:key="task.index">
          <template class="task-item">
            <task-item
              :title.sync="task.title"
              :duration.sync="task.duration"
              :running.sync="task.running"
              :completed.sync="task.completed"
              @completeTask="moveTaskToCompleted"
            />
          </template>
        </div>
        <section class="task-add">
          <input
            id="title-input"
            type="text"
            placeholder="Title"
            v-model="newTaskTitle"
            @keypress.enter="addTask"
          >
          <input
            id="duration-input"
            type="text"
            placeholder="Duration"
            v-model="newTaskDuration"
            @keypress.enter="addTask"
          >
          <button class="add-task-button" @click="addTask">Add</button>
        </section>
      </div>
      <div class="col current-task-col">
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

        <div class="add-time-buttons">
          <button class="time-increment-button" @click="incrementTime(1 ,'m')">+1</button>
          <button class="time-increment-button" @click="incrementTime(5 ,'m')">+5</button>
          <button class="time-increment-button" @click="incrementTime(10 ,'m')">+10</button>
        </div>

        <button class="complete-button" @click="moveTaskToCompleted">Complete</button>
      </div>
      <div class="col completed-col">
        <span class="completed-label">Completed</span>
        <div class="task-gen-list" v-for="(task) in completedTasks" v-bind:key="task.index">
          <task-item
            :title.sync="task.title"
            :duration.sync="task.duration"
            :running.sync="task.running"
            :completed.sync="task.completed"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  name: "TaskList",
  components: { TaskItem },
  data() {
    return {
      tasks: [],
      completedTasks: [],
      newTaskTitle: "",
      newTaskDuration: "",
      isTimerStarted: false,
      currentTask: null
    };
  },
  computed: {
    totalTimeString() {
      // function to add durations together
      const durationAdder = (accumulator, element) => accumulator.add(element);
      /* Extract duration from each TaskItem
      and use durationAdder function to add them together.
      Classic map-reduce use case */
      let rawTime = this.tasks
        .map(task => task.duration)
        .reduce(durationAdder, this.$moment.duration(0));

      return this.$duration.durationMomentToString(rawTime);
    },
    isTasks() {
      return this.tasks.length > 0;
    }
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
        // parse and validate the duration before adding to list
        let parsedDuration = this.$duration.stringToDurationMoment(
          this.newTaskDuration
        );
        if (parsedDuration) {
          this.tasks.push({
            title: this.newTaskTitle,
            duration: parsedDuration,
            running: false,
            completed: false
          });
          this.newTaskTitle = "";
          this.newTaskDuration = "";
        } else {
          alert(
            "Please enter a valid duration in HH:MM (10:15, 4:30, or :45) or XhYm (6h30, or 30m) format. Thanks!"
          );
          /* don't erase the title, only the duration if entered incorrectly
            annoying for the user if they have to retype their entire title again */
          this.newTaskDuration = "";
        }
      }
    },
    moveTaskToCompleted() {
      // move top task from tasks array to completedTasks array

      // TODO: Ideally the To-Do and Completed Lists should be filtered on if task.completed is true or not
      let completedTask = this.tasks.shift();
      completedTask.duration = this.$moment.duration(0);
      completedTask.completed = true;
      this.completedTasks.push(completedTask);
      this.startTimer();
    },
    startTimer() {
      // check if at least one task exists
      if (this.tasks.length > 0) {
        this.tasks[0].running = true;
        this.isTimerStarted = true;
      } // else alert("Please enter a task");
    },
    pauseTimer() {
      if (this.tasks.length > 0) {
        this.tasks[0].running = false;
        this.isTimerStarted = false;
      } // else alert("Please enter a task");
    },
    controlTimerPlay() {
      if (!this.isTimerStarted) {
        return this.startTimer();
      } else return this.pauseTimer();
    },
    incrementTime(amount, denomination) {
      if (!(typeof denomination == "string")) {
        throw "incrementTime time denomination must be a string";
      }
      if (this.tasks.length > 0)
        // this.originalTime = this.duration.add(amount, denomination);
        this.$emit(
          "update:duration",
          this.tasks[0].duration.add(amount, denomination)
        );
    }
    // pomodorify(task, workDuration, breakDuration) {
    //   if (task.duration <= workDuration) {
    //     alert(
    //       "This task is shorter in duration than your Pomodoro work duration"
    //     );
    //   } else {
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grid {
  display: flex;
}
.col {
  flex: 1;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.add-time-buttons {
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 2rem;
  font-style: italic;
  font-size: 2rem;
}

.to-do-col,
.completed-col {
  width: 30%;
}

.to-do-col {
  margin: 4rem 0 0 4rem;
}

::-webkit-scrollbar {
  display: none;
}

.task-item {
  margin: 1rem 0;
}

.task-add {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-between;
  padding: 1rem 0;
}

input {
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 5px solid transparent;

  padding: 2rem, 0;
  margin-bottom: 5px;

  font-size: 1rem;
  font-weight: 700;

  transition: 100ms;
  transition-timing-function: ease-in-out;
}

input:focus {
  border-bottom: 5px solid var(--accent-color);
}

.add-task-button {
  color: white;
  background-color: var(--accent-color);
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.5rem;
}

.current-task-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  min-width: 40%;
}

.current-task {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.current-task-title {
  font-size: 2vw;
  font-weight: 700;
  color: var(--accent-color);
}

.current-task-duration {
  font-size: 8vw;
}

.current-task-title,
.current-task-duration {
  overflow-x: scroll;
}

.completed-col {
  text-align: right;
  margin: 4rem 4rem 0 0;
}

.to-do-label,
.completed-label {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.total-time-content {
  color: var(--text-color-disabled);
  margin-bottom: 3rem;
}

.total-time-content #totalTimeString {
  font-size: 50px;
  margin-bottom: 0;
}

.total-time-content #totalTimeLabel {
  font-size: 20px;
  text-align: center;
}

/* Remove all button styling */
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.complete-button {
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

@media (max-width: 900px) {
  .flex-grid {
    flex-direction: column;
  }

  .to-do-col {
    order: 2;
  }

  .current-task-col {
    order: 1;
  }

  .completed-col {
    order: 3;
  }
}
</style>
