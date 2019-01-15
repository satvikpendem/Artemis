<template>
  <div class="task">
    <span>{{ duration }} - {{ title }}</span>
    <span>
      <button @click="incrementTime">+</button>
      <button @click="decrementTime">-</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["title", "duration"],
  data() {
    return {
      // title: this.propTitle,
      // duration: this.propDuration
    };
  },
  methods: {
    incrementTime() {
      // this.duration += 1;
      this.$emit("update:duration", this.duration + 60000);
    },
    decrementTime() {
      // this.duration -= 1;
      this.$emit("update:duration", this.duration - 60000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
