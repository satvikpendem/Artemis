import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import nanoid from "nanoid";

export default new Vuex.Store({
  state: {
    tasks: {}
  },
  getters: {
    tasks: state => {
      return state.tasks;
    },
    completedTasks: state => {
      return Object.entries(state.tasks).reduce((acc, [key, value]) => {
        if (key && value && value.complete == true) {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
  },
  mutations: {
    addTask(state, { id, task }) {
      Vue.set(state.tasks, id, task);
    },
    deleteTask(state, id) {
      Vue.delete(state.tasks, id);
    },
    completeTask(state, id) {
      Vue.set(state.tasks[id], "complete", true);
    }
  },
  actions: {
    async addTask(context, task) {
      if (await context.dispatch("validateTask", task)) {
        let id = nanoid();
        task.id = id;
        task.complete = false;
        context.commit("addTask", { id, task });
      } else throw new Error("Task not validated");
    },
    deleteTask(context, taskId) {
      context.commit("deleteTask", taskId);
    },
    completeTask(context, taskId) {
      console.log(context.state);
      context.commit("completeTask", taskId);
      console.log(context.state);
    },
    async validateTask(context, task) {
      let titleValidated = await context.dispatch("validateTitle", task);
      let durationValidated = await context.dispatch("validateDuration", task);
      return titleValidated && durationValidated;
    },
    validateDuration(context, taskId) {
      return true;
    },
    validateTitle(context, taskId) {
      return true;
    }
  }
});
