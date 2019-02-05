import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [
        { title: "hello", duration: 1 },
        { title: "hello", duration: 1 },
        { title: "hello", duration: 1 },
        { title: "hello", duration: 1 },
        { title: "hello", duration: 1 },
        { title: "hello", duration: 1 }
      ],
      completedTasks: []
    }
  },
  getters: {},
  mutations: {
    addTask(state, task) {
      state.tasks.todo.push(task);
    },
    removeTask(state, index) {},
    completeTask(state, index) {}
  },
  actions: {
    addTask(context, task) {
      context.commit("addTask", task);
    },
    removeTask(context, taskId) {},
    completeTask(context, taskId) {},
    validateTask() {},
    validateDuration() {},
    validateTitle() {}
  }
});
