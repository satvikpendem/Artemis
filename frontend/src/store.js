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
    },
    readableTaskList: state => {
      return state.taskList.map(task => ({
        ...task,
        duration: _app.$duration.durationMomentToString(task.duration, "clock")
      }));
    },
    readableCurrentTask: state => {
      if (state.currentTask) {
        return {
          ...state.currentTask,
          duration: _app.$duration.durationMomentToString(
            state.currentTask.duration,
            "clock"
          )
        };
      } else return false;
    },
    readableTotalTime: state => {
      // function to add durations together
      const durationAdder = (accumulator, element) => accumulator.add(element);
      /* Extract duration from each TaskItem
      and use durationAdder function to add them together.
      Classic map-reduce use case */
      let zeroDuration = _app.$moment.duration(0);
      let rawTime = state.taskList
        .map(task => task.duration)
        .reduce(durationAdder, zeroDuration);

      return _app.$duration.durationMomentToString(rawTime, "clock");
    }
  },
  mutations: {
    addTask(state, task) {
      state.taskList.push(task);
    },
    deleteTask(state, index) {
      if (state.taskList.length > 0) state.taskList.splice(index, 1);
    },
    completeTask(state, index) {
      if (state.taskList.length > 0) state.taskList[index].complete = true;
    },
    setCurrentTask(state) {
      if (state.taskList.length > 0) {
        state.currentTask = state.taskList[0];
      } else state.currentTask = null;
    },
    incrementTaskTime(state, index) {},
    decrementTaskTime(state, { timeType, timeValue }) {
      console.log({ timeType, timeValue });
    }
  },
  actions: {
    async addTask(context, task) {
      let parsedDuration = _app.$duration.stringToDurationMoment(task.duration);
      let parsedTask = {
        title: task.title,
        duration: parsedDuration
      };
      if (
        parsedDuration &&
        (await context.dispatch("validateTask", parsedTask))
      ) {
        task.id = nanoid();
        task.complete = false;
        await context.commit("addTask", parsedTask);
        context.dispatch("setCurrentTask");
      } else throw new Error("Task not validated");
    },
    async deleteTask(context, taskId) {
      let index = await context.dispatch("getIndexById", taskId);
      await context.commit("deleteTask", index);
      context.dispatch("setCurrentTask");
    },
    async completeTask(context) {
      await context.commit("completeTask", 0);
      context.dispatch("setCurrentTask");
    },
    async validateTask(context, task) {
      let titleValidated = await context.dispatch("validateTitle", task);
      let durationValidated = await context.dispatch("validateDuration", task);
      return titleValidated && durationValidated;
    },
    validateDuration(_, { duration }) {
      if (duration) {
        let zeroDuration = _app.$duration.zero();
        // FIXME: Edge case with >24 hour tasks
        if (
          duration.hours() > zeroDuration.hours() ||
          duration.minutes() > zeroDuration.minutes() ||
          duration.seconds() > zeroDuration.seconds()
        )
          return true;
        else return false;
      } else return false;
    },
    validateTitle(_, { title }) {
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
    async getIndexById(context, id) {
      let index = await context.state.taskList.findIndex(
        element => element.id == id
      );
      if (index > -1) return index;
      else throw new Error("Index not found");
    }
  }
});
