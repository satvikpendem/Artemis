<template>
  <div id="task-list">
    <task-item :title="tree.title" :duration="tree.duration" :nodes="tree.nodes"/>
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
        title: "root",
        duration: "1:00",
        nodes: [
          {
            title: "item1",
            duration: "1:00",
            nodes: [
              {
                title: "item1.1",
                duration: "1:00"
              },
              {
                title: "item1.2",
                duration: "1:00",
                nodes: [
                  {
                    title: "item1.2.1",
                    duration: "1:00"
                  }
                ]
              }
            ]
          },
          {
            title: "item2",
            duration: "1:00"
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
