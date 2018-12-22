<template>
  <div id="task-list">
    <task-item :label="tree.label" :nodes="tree.nodes"/>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "task-list",
  components: { TaskItem },
  data() {
    return {
      tree: {
        label: "root",
        nodes: [
          {
            label: "item1",
            nodes: [
              {
                label: "item1.1"
              },
              {
                label: "item1.2",
                nodes: [
                  {
                    label: "item1.2.1"
                  }
                ]
              }
            ]
          },
          {
            label: "item2"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
#task-list {
  background-color: var(--background-color);
  flex-grow: 2;
  width: 50%;
  height: 100vh;
  text-align: left;
  overflow: auto;
  display: flex;
}
</style>
