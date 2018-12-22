<template>
  <div id="task-item">
    <ul>
      <li>{{ label }}</li>
      <task-item v-for="node in nodes" :nodes="node.nodes" :label="node.label" :key="node.id"/>
    </ul>
  </div>
</template>

<script>
export default {
  name: "task-item",
  props: ["nodes", "label"]
};
</script>

<style scoped>
#task-item {
  display: flex;
  padding-right: 5px;
  width: 100%;
  transition: background-color 0.25s;
}

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
