<template>
  <div id="task-item">
    <draggable
      :list="nodes"
      :element="'ul'"
      class="dragArea"
      :options="{ group: { name:'task-group'}, animation: 250, direction: 'vertical', ghostClass:'ghost', chosenClass: 'chosen'}"
    >
      <li v-for="node in nodes" :key="node.id">
        <p>{{ node.duration + ": " + node.title }}</p>
        <task-item :nodes="node.nodes"></task-item>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "task-item",
  props: ["nodes"],
  components: {
    draggable
  }
};
</script>

<style scoped>
#task-item {
  padding-right: 5px;
  width: 100%;
}

.dragArea {
  min-height: 10px;
}

li {
  width: 100%;
  list-style: none;
  list-style-position: inside;
}
</style>
