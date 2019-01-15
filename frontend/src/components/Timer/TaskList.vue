<template>
  <div class="task-list">
    <span>Total time: {{ totalTimeString }}</span>
    <br>
    <button v-if="this.tasks" @click="startTimer">Start</button>
    <br>
    <span>To-Do</span>
    <div v-for="(task) in tasks" v-bind:key="task.index">
      <Task
        :title.sync="task.title"
        :duration.sync="task.duration"
        :running.sync="task.running"
        :completed.sync="task.completed"
        @completeTask="moveTaskToCompleted"
      />
    </div>
    <br>
    <span>Completed</span>
    <div v-for="(task) in completedTasks" v-bind:key="task.index">
      <Task
        :title.sync="task.title"
        :duration.sync="task.duration"
        :running.sync="task.running"
        :completed.sync="task.completed"
        @completeTask="moveTaskToCompleted"
      />
    </div>
    <section class="task-add">
      <input type="text" placeholder="Duration" v-model="newTaskDuration" @keypress.enter="addTask">
      <input type="text" placeholder="Title" v-model="newTaskTitle" @keypress.enter="addTask">
      <button class="add-task-button" @click="addTask">Add</button>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import Task from "./Task";
export default {
  name: "TaskList",
  components: { Task },
  data() {
    return {
      tasks: [],
      completedTasks: [],
      newTaskTitle: "",
      newTaskDuration: ""
    };
  },
  computed: {
    totalTimeString() {
      // if (this.tasks.length == 0) return "0 minutes";
      // function to add durations together
      const durationAdder = (accumulator, element) => accumulator.add(element);
      /* Extract duration from each TaskItem
      and use durationAdder function to add them together.
      Classic map-reduce use case */
      let rawTime = this.tasks
        .map(task => task.duration)
        .reduce(durationAdder, this.$moment.duration(0));

      return this.$duration.durationMomentToString(rawTime);
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
      // console.log(this.tasks);
      // console.log(this.tasks.shift());
      // console.log(this.tasks);
      // console.log(this.completedTasks);
      this.completedTasks.push(this.tasks.shift());
    },
    startTimer() {
      // check if at least one task exists
      if (this.tasks) {
        this.tasks[0].running = true;
      } else alert("Please enter a task");
      // this.timer = setInterval(() => this.decrementTime(), 100);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
