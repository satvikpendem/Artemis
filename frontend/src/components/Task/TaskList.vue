<template>
  <div class="task-list">
    <div class="flex-grid">
      <div class="col">
        <span>To-Do</span>
        <div v-for="(task) in tasks" v-bind:key="task.index">
          <TaskItem
            :title.sync="task.title"
            :duration.sync="task.duration"
            :running.sync="task.running"
            :completed.sync="task.completed"
            @completeTask="moveTaskToCompleted"
          />
        </div>
        <section class="task-add">
          <input
            type="text"
            placeholder="Duration"
            v-model="newTaskDuration"
            @keypress.enter="addTask"
          >
          <input type="text" placeholder="Title" v-model="newTaskTitle" @keypress.enter="addTask">
          <button class="add-task-button" @click="addTask">Add</button>
        </section>
      </div>
      <div class="col">
        <section class="current-task" v-if="isTasks">
          <span>{{ this.tasks[0].duration }}</span>
          <br>
          <span>{{ this.tasks[0].title }}</span>
        </section>

        <span>Total time: {{ totalTimeString }}</span>
        
        <button v-if="this.tasks.length > 0 && !this.isTimerStarted" @click="controlTimerPlay">Start</button>
        <button v-if="this.tasks.length > 0 && this.isTimerStarted" @click="controlTimerPlay">Pause</button>

        <div class="add-time-buttons">
          <button @click="incrementTime(1 ,'m')">+1</button>
          <button @click="incrementTime(5 ,'m')">+5</button>
          <button @click="incrementTime(10 ,'m')">+10</button>
        </div>

        <button @click="moveTaskToCompleted">Complete</button>
      </div>
      <div class="col">
        <span>Completed</span>
        <div v-for="(task) in completedTasks" v-bind:key="task.index">
          <TaskItem
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
      let completedTask = this.tasks.shift();
      completedTask.duration = this.$moment.duration(0);
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
}
</style>
