<template>
  <button id="atomic-button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "AtomicButton"
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: white;
  background-color: var(--accent-color);
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.5rem;
}
</style>
