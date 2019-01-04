<template>
  <div id="task-item">
    <ul v-for="item in items" :key="item.id">
      <li>
        <p v-if="item[durationField]">{{ item[durationField] + ": " + item[titleField] }}</p>
        <p v-else>{{ item[titleField] }}</p>
        <task-item :items="item[childrenField]"></task-item>
      </li>
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
    }
  },
  computed: {}
};
</script>

<style scoped>
/* #task-item {
  padding-right: 5px;
  width: 100%;
}

li {
  width: 100%;
  list-style: none;
  list-style-position: inside;
} */
</style>
