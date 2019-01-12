<template>
  <div class="task-list">
    <span>Total time: {{ totalTime }}</span>
    <div v-for="(task) in tasks" v-bind:key="task.index">
      <Task :title="task.title" :duration="task.duration"/>
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
      newTaskTitle: "",
      newTaskDuration: ""
    };
  },
  computed: {
    durationMomentToString(_durationMoment) {
      return `${_durationMoment.hours()}:${_durationMoment.minutes()}`;
    },
    totalTime() {
      // if (this.tasks.length == 0) return "0 minutes";
      // function to add durations together
      const durationAdder = (accumulator, element) => accumulator.add(element);
      /* Extract duration from each TaskItem
      and use durationAdder function to add them together.
      Classic map-reduce use case */
      let rawTime = this.tasks
        .map(task => task.duration)
        .reduce(durationAdder, this.$moment.duration(0));

      let hours = rawTime.hours();
      let minutes = rawTime.minutes();

      if (hours === 0 && minutes === 0) return "0 minutes";

      let stringArray = [];

      let hourString = "";
      let andString = "";
      let minuteString = "";

      if (hours && minutes) andString = " and ";
      if (hours) hourString = `${hours} hours`;
      if (minutes) minuteString = `${minutes} minutes`;

      return hourString + andString + minuteString;
    }
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
        // parse and validate the duration before adding to list
        let parsedDuration = this.toDuration(this.newTaskDuration);
        if (parsedDuration) {
          this.tasks.push({
            title: this.newTaskTitle,
            duration: parsedDuration
          });
          this.newTaskTitle = "";
          this.newTaskDuration = "";
        } else {
          alert(
            "Please enter a valid duration in HH:MM (10:15, or 4:30) or XhYm (6h30, or 30m) format. Thanks!"
          );
          /* don't erase the title, only the duration if entered incorrectly
            annoying for the user if they have to retype their entire title again */
          this.newTaskDuration = "";
        }
      }
    },
    toDuration(_duration) {
      // remove whitespace
      let newDuration = _duration.replace(/ /g, "");
      /* match one of:
        1 - X:Y, :Y
        2 - Xh, XhY, XhYm
        3 - Xm, X (just a digit, inferred to be number of minutes)
      */
      let regexps = [
        /^(\d*):(\d+){1,2}$/,
        /^(\d*)[Hh]+(\d*){1,2}[Mm]?$/,
        /^(\d*)[Mm]?$/
      ];
      // loop through allowed formats to figure out which format was used
      for (let re of regexps) {
        // if there is a match with the input, splice the hours and minutes
        let match = newDuration.match(re);
        if (match) {
          let durationMoment;

          /* String.match returns for each input:
            1 - 4h30 : ["entire string", "hour group", "minute group"]
                       ["4h30", "4", "30"]
            2 - 4h : ["entire string", "hour group", ""]
                     ["4h30", "4", ""]
            3 - 30 : ["entire string", "minute group"]
                     ["30", "30"]
            Based on the length of this array and whether the last element is "",
            one can figure out the hour and minutes inputted
          */
          if (match.length == 3) {
            // hours (and potentially minutes)
            // console.log(match[1]);
            durationMoment = this.$moment.duration({
              hours: match[1],
              // check if minutes exists
              minutes: match[2] ? match[2] : 0
            });
          } else {
            // only minutes
            // console.log(match[0]);
            // console.log(match[1]);
            durationMoment = this.$moment.duration({
              minutes: match[1]
            });
          }
          return durationMoment;
        }
      }
      // no matches were found
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
