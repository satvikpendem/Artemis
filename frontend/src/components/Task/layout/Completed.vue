<template>
  <div id="completed">
    <span id="completed-label">Completed</span>
  </div>
</template>

<script>
export default {
  name: "completed"
};
</script>

<style>
#completed {
  text-align: right;
  margin: 4rem 4rem 0 0;
  padding: 0;
}
#completed-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1vw);
}
</style>
