<template>
  <div id="task-item">
    <draggable
      :list="nodes"
      :element="'ul'"
      class="dragArea"
      :options="{group:{ name:'task-group'}}"
    >
      <div v-for="node in nodes" :key="node.id">
        <ul v-if="node.nodes">
          <p>{{ node.title }}</p>
          <task-item :nodes="node.nodes"></task-item>
        </ul>
        <li v-else>
          <p>{{ node.title }}</p>
        </li>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "task-item",
  props: ["title", "duration", "nodes"],
  components: {
    draggable
  }
};
</script>

<style scoped>
#task-item {
  display: flex;
  padding-right: 5px;
  width: 100%;
  transition: background-color 0.25s;
}

.dragArea {
  min-height: 50px;
  display: block;
}

draggable,
ul {
  width: 100%;
}

li {
  list-style: none;
  padding: 10px;
  list-style-position: inside;
  background: var(--main-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
