<template>
  <div class="completed">
    <span id="completed-label">Completed</span>
  </div>
</template>

<script>
export default {
  name: "completed"
};
</script>

<style>
.completed {
  text-align: center;
  background: blue;
}
#completed-label {
  margin-bottom: 2rem;
  font-size: calc(2rem + 1vw);
}
</style>
