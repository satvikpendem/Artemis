<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from '@/views/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
:root {
  --t-speed: 0.5s;
}

#app {
  font-family: "Inter", sans-serif; 
  height: 100vh;
}
</style>
