<template>
  <div id="header">
    <Toggle @toggleMode="handleToggle"/>
  </div>
</template>

<script>
import Toggle from "@/components/_Global/Toggle.vue";

export default {
  name: "Header",
  components: { Toggle },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    handleToggle(data) {
      this.darkMode = data;
    }
  }
};
</script>

<style>
</style>
