<template>
  <div id="task-item">
    <ul v-for="item in items" :key="item.id">
      <li>
        <input
          type="checkbox"
          name="check"
          id="checkbox"
          @click="selectItem"
          v-model="itemSelected"
        >
        <p v-if="item[durationField]">{{ item[durationField] + ": " + item[titleField] }}</p>
        <p v-else>{{ item[titleField] }}</p>
      </li>
      <task-item
        v-if="item[childrenField]"
        :items="item[childrenField]"
        :children-field="'children'"
        :title-field="'title'"
        :duration-field="'duration'"
        :selected="itemSelected"
      ></task-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: "task-item",
  props: {
    titleField: {
      type: String,
      required: false,
      default: "title"
    },
    durationField: {
      type: String,
      required: false,
      default: "duration"
    },
    descriptionField: {
      type: String,
      required: false,
      default: "description"
    },
    childrenField: {
      type: String,
      required: false,
      default: "children"
    },
    items: {
      type: [Object, Array],
      required: true,
      default: () => []
    },
    value: {
      type: Array,
      required: false,
      default: null
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      itemSelected: false
    };
  },
  methods: {
    selectItem() {
      console.log("Before: " + this.itemSelected);
      this.itemSelected = !this.itemSelected;
      console.log("After: " + this.itemSelected);
    },
    setItemSelected(newVal) {
      this.itemSelected = newVal ? newVal : false;
    }
  },
  created() {
    this.setItemSelected(this.$props.selected);
  }
};
</script>

<style scoped>
#task-item {
  padding-right: 5px;
  width: 100%;
}

li {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
