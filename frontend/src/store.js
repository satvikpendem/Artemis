import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import nanoid from "nanoid";

export default new Vuex.Store({
  state: {
    taskList: [],
    currentTask: null,
    timer: null
  },
  getters: {
    taskList: state => {
      return state.taskList;
    },
    taskListLength: state => {
      return state.taskList.length;
    },
    completedTaskList: state => {
      return state.taskList.filter(task => task.complete == true);
      // return Object.entries(state.taskList).reduce((acc, [key, value]) => {
      //   if (key && value && value.complete == true) {
      //     acc[key] = value;
      //   }
      //   return acc;
      // }, {});
    }
  },
  mutations: {
    addTask(state, task) {
      // Vue.set(state.taskList, id, task);
      state.taskList.push(task);
    },
    deleteTask(state, index) {
      // Vue.delete(state.taskList, id);
      if (state.tasks.length > 0) state.taskList.splice(index, 1);
    },
    completeTask(state, index) {
      // Vue.set(state.taskList[id], "complete", true);
      if (state.tasks.length > 0) state.taskList[index].complete = true;
    },
    setCurrentTask(state) {
      if (state.tasks.length <= 0) {
        state.currentTask = state.taskList[0];
      } else state.currentTask = null;
    },
    incrementTaskTime() {},
    decrementTaskTime(state, { timeType, timeValue }) {
      console.log({ timeType, timeValue });
    }
  },
  actions: {
    async addTask(context, task) {
      if (await context.dispatch("validateTask", task)) {
        task.id = nanoid();
        task.complete = false;
        console.log(task);
        context.commit("addTask", { id, task });
        // context.dispatch("setCurrentTask");
      } else throw new Error("Task not validated");
    },
    deleteTask(context, taskId) {
      let index = context.dispatch("getIndexById");
      context.commit("deleteTask", index);
    },
    completeTask(context, taskId) {
      context.commit("completeTask", 0);
    },
    async validateTask(context, task) {
      console.log("Validation entered...");
      let titleValidated = await context.dispatch("validateTitle", task);
      console.log(titleValidated);
      let durationValidated = await context.dispatch("validateDuration", task);
      console.log(durationValidated);
      return titleValidated && durationValidated;
    },
    validateDuration(_, { duration }) {
      //TODO
      let parsedDuration = this.$duration.stringToDurationMoment(duration);
      let zeroDuration = this.$duration.zero();
      console.log(parsedDuration);
      console.log(zeroDuration);
      if (
        parsedDuration.hours() > zeroDuration.hours() ||
        parsedDuration.minutes() > zeroDuration.minutes() ||
        parsedDuration.seconds() > zeroDuration.seconds()
      )
        return true;
      else return false;
    },
    validateTitle(_, { title }) {
      //TODO
      console.log(title.length > 0);
      return title.length > 0;
    },
    incrementTaskTime() {},
    startTimer(context) {
      context.state.timer = this.$workerTimers.setInterval(
        () => context.commit("decrementTime", { timeValue: 1, timeType: "s" }),
        1000
      );
    },
    pauseTimer(context) {},
    setCurrentTask(context) {
      return context.commit("setCurrentTask");
    },
    getIndexById(context, id) {
      let index = context.state.taskList.findIndex(element => element.id == id);
      if (index > -1) return index;
      else throw new Error("Index not found");
    }
  }
});
