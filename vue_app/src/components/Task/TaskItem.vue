<template>
  <div id="task-item">
    <draggable :element="'ul'" class="dragArea" :options="{group:{ name:'task-group'}}">
      <li>
        <span>{{ duration }}:</span>
        {{ title }}
      </li>
      <task-item
        v-for="node in nodes"
        :title="node.title"
        :duration="node.duration"
        :nodes="node.nodes"
        :key="node.id"
      />
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
  min-height: 10px;
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
