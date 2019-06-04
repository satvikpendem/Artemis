<template>
  <div class="container" @drag="ondrop"></div>
</template>

<script>
export default {
  name: "container",
  data() {
    return {};
  },
  methods: {
    ondrop() {
      console.log("drop");
    }
  }
};
</script>

<style>
.container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
