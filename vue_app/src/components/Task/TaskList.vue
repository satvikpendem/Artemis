<template>
  <div id="task-list">
    <task-item
      :items="nodes"
      :children-field="'children'"
      :title-field="'title'"
      :duration-field="'duration'"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "task-list",
  components: { TaskItem },
  data() {
    return {
      nodes: [
        {
          title: "root",
          // duration: "1:00",
          children: [
            {
              title: "item1",
              duration: "1:00",
              children: [
                {
                  title: "item1.1",
                  duration: "1:00"
                },
                {
                  title: "item1.2",
                  duration: "1:00",
                  children: [
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
      ]
    };
  }
};
</script>

<style scoped>
/* #task-list {
  background-color: var(--background-color);
  flex-grow: 2;
  width: 50%;
  height: 100vh;
  text-align: left;
  overflow: auto;
  display: flex;
} */
</style>
