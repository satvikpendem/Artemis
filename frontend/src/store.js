import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import nanoid from "nanoid";

export default new Vuex.Store({
  state: {
    tasks: {
      todo: {}
      // completedTasks: []
    }
  },
  getters: {},
  mutations: {
    addTask(state, { id, task }) {
      Vue.set(state.tasks.todo, id, task);
      console.log(state.tasks.todo);
    },
    deleteTask(state, id) {
      Vue.delete(state.tasks.todo, id);
    },
    completeTask(state, index) {}
  },
  actions: {
    addTask(context, task) {
      let id = nanoid();
      task.id = id;
      context.commit("addTask", { id, task });
    },
    deleteTask(context, taskId) {
      context.commit("deleteTask", taskId);
    },
    completeTask(context, taskId) {},
    validateTask() {},
    validateDuration() {},
    validateTitle() {}
  }
});
