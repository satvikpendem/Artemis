<template>
  <div class="task">{{ duration }} - {{ title }}</div>
</template>

<script>
export default {
  name: "Task",
  props: ["title", "duration"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
