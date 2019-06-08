import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import nanoid from "nanoid";
import "core-js";

export default new Vuex.Store({
  state: {
    eventList: {}, // raw event data by event id, unordered
    indexList: {} // Object of keys (category) and values (Array of event ids)
  },
  getters: {
    eventFilter: state => category => {
      switch (category) {
        case "todo":
        case "complete": {
          if (!state.indexList[category]) {
            // initialize category list if not already present
            Vue.set(state.indexList, category, []);
          }
          return state.indexList[category].map(id => state.eventList[id]);
        }
      }
    }
  },
  mutations: {
    addEvent: (state, event) => {
      state.eventList[event.id] = event;

      // Add to indexList to maintain event cardinality
      if (!state.indexList[event.category]) {
        // initialize category list if not already present
        Vue.set(state.indexList, event.category, []);
      }
      state.indexList[event.category].push(event.id);
    },
    changeCategory: (state, { eventID, toIndex, toCategory, alignment }) => {
      let fromCategory = state.eventList[eventID].category;
      state.eventList[eventID].category = toCategory;

      let fromIndex = state.indexList[fromCategory].findIndex(
        id => id == eventID
      ); // TODO optimize to pass fromIndex as well instead of searching by id
      let movedEvent = state.indexList[fromCategory].splice(fromIndex, 1); // remove from old category
      let alignedIndex = alignment == "before" ? toIndex : toIndex + 1;
      state.indexList[toCategory].splice(alignedIndex, 0, movedEvent); // add to new category
    }
  },
  actions: {
    async addEvent(context, event) {
      event.id = await nanoid().slice(0, 2);
      context.commit("addEvent", event);
    },
    changeCategory(context, payload) {
      context.commit("changeCategory", payload);
    },
    swapEvents() {}
  }
});
