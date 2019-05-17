<template>
  <div id="main" class="animate">
    <Header/>
    <GoalList/>
  </div>
</template>

<script>
import Header from "@/components/_Global/Header.vue";
import GoalList from "@/components/Goal/GoalList.vue";

export default {
  name: "Main",
  components: { GoalList, Header }
};
</script>

<style>
#main {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}

.animate > * {
  transition: var(--t-speed);
}
</style>
