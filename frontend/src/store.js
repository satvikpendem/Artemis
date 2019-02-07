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
    }
  },
  mutations: {
    addTask(state, { id, task }) {
      Vue.set(state.tasks, id, task);
    },
    deleteTask(state, id) {
      Vue.delete(state.tasks, id);
    },
    completeTask(state, index) {}
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
    completeTask(context, taskId) {},
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
