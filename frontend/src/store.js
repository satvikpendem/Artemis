import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

// Time plugins
// import moment from "moment";
// Object.defineProperty(Vue.prototype, "$moment", { value: moment });

import duration from "./plugins/duration.js";
Vue.use(duration);

// Synchronize JS interval timers
import * as workerTimers from "worker-timers";
Object.defineProperty(Vue.prototype, "$workerTimers", { value: workerTimers });

import nanoid from "nanoid";

let _app = new Vue();

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
        context.commit("addTask", task);
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
      let titleValidated = await context.dispatch("validateTitle", task);
      let durationValidated = await context.dispatch("validateDuration", task);
      return titleValidated && durationValidated;
    },
    validateDuration(_, { duration }) {
      //TODO
      let parsedDuration = _app.$duration.stringToDurationMoment(duration);
      let zeroDuration = _app.$duration.zero();
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
      return title.length > 0;
    },
    incrementTaskTime() {},
    startTimer(context) {
      context.state.timer = _app.$workerTimers.setInterval(
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
