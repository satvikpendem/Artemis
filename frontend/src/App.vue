<template>
  <div id="app">
    <GoalList/>
  </div>
</template>

<script>
import GoalList from '@/components/GoalList.vue'

export default {
  name: 'app',
  components: {
    GoalList
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
