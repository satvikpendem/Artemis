<template>
  <div class="drag">
    <div class="box" draggable="true" @dragstart="dragStartFun">
      <div class="before" @dragover="dragAlightment('before')">{{event.id}}</div>
      <div class="after" @dragover="dragAlightment('after')">{{event.category}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drag",
  props: ["event"],
  methods: {
    dragStartFun(e) {
      e.dataTransfer.setData("id", this.event.id);
    },
    dragAlightment(option) {
      if (!(option == "before" || option == "after"))
        throw new Error(
          "Option not of either 'before' or 'after' in dragAlightment(option) in Drag.vue"
        );
      this.$emit("alignment", option);
    }
  }
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.before {
  background-color: blue;
  width: 100px;
  height: 100px;
}

.after {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>
