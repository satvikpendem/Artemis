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
  margin: 1rem 1rem 0 0;
  padding: 0.5rem;
}
</style>
