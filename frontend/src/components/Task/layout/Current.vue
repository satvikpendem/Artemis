<template>
  <div class="current">
    <span id="current-label">Current</span>
  </div>
</template>

<script>
export default {
  name: "current"
};
</script>

<style>
.current {
  text-align: center;
  background: green;
}
#current-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1.5vw);
}
/* font-variant-numeric: tabular-nums */
</style>