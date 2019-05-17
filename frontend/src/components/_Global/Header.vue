<template>
  <div id="header" :class="{ dark: IS_DARK_THEME}">
    <Toggle/>
  </div>
</template>

<script>
import Toggle from "@/components/_Global/Toggle.vue";

import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: { Toggle },
  computed: {
    ...mapGetters(["IS_DARK_THEME"])
  }
};
</script>

<style>
#header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dark {
  background-color: black;
  color: white;
}
</style>
