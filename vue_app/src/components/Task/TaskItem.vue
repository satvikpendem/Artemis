<template>
  <div id="task-item">
    <DraggableTree :data="nodes" draggable cross-tree>
      <ul v-for="node in nodes" :key="node.id">
        <li>
          <p class="drag">{{ node.duration + ": " + node.title }}</p>
          <task-item :nodes="node.nodes"></task-item>
        </li>
      </ul>
    </DraggableTree>
  </div>
</template>

<script>
import DraggableTree from "vue-draggable-nested-tree";

export default {
  name: "task-item",
  props: ["nodes"],
  components: {
    DraggableTree
  }
};
</script>

<style scoped>
#task-item {
  padding-right: 5px;
  width: 100%;
}

.dragArea {
  min-height: 50px;
  margin-left: 50px;
}

li {
  width: 100%;
  list-style: none;
  list-style-position: inside;
}
</style>
