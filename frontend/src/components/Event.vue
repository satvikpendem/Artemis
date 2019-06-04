<template>
  <!-- <div class="event" draggable="true" @dragstart="startDrag"> -->
  <div class="event" draggable="true" @dragstart="startDrag" @dragend="stopDrag">
    <div class="box" :style="styleObject">
      <div id="wh">{{ eventLength }} minutes</div>
    </div>
    <div class="scale" @mousedown.prevent="startScale"></div>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      width: 100,
      isScaling: false,
      isDragging: false,
      STEP: 2,
      // TODO This is pixel step not time step in terms of "5 min minimum increases in time" for example
      MIN_LENGTH: 30,
      TEMP_LENGTH: 0
    };
  },
  props: ["event"],
  computed: {
    styleObject() {
      return {
        width: this.width + "px",
        height: this.height + "px"
      };
    },
    height: {
      get: function() {
        return this.event.length * this.STEP;
      },
      set: function(newVal) {
        this.event.length = newVal / this.STEP;
      }
    },
    eventLength() {
      return this.height / this.STEP;
    }
  },
  methods: {
    startScale() {
      this.isScaling = true;
      this.TEMP_LENGTH = this.height;
    },
    stopScale() {
      this.isScaling = false;
      this.TEMP_LENGTH = 0;
    },
    doScale(e) {
      if (this.isScaling) {
        this.TEMP_LENGTH += e.movementY;
        if (
          this.TEMP_LENGTH % this.STEP == 0 &&
          this.TEMP_LENGTH / this.STEP >= this.MIN_LENGTH
        ) {
          this.height = this.TEMP_LENGTH;
        }
      }
    },
    startDrag() {
      console.log("startDrag");
      this.$emit("dragged", this.event);
    },
    stopDrag() {
      console.log("stopDrag");
    }
  },
  mounted() {
    this.id = Math.round(Math.random() * 100000);
    window.addEventListener("mousemove", this.doScale);
    window.addEventListener("mouseup", this.stopScale);
    window.addEventListener("mouseup", this.stopDrag);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.doScale);
    window.removeEventListener("mouseup", this.stopScale);
    window.removeEventListener("mouseup", this.stopDrag);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event {
  display: flex;
  flex-direction: column;
  transition: 100ms;
}

.box {
  background-color: red;
}

#wh {
  user-select: none;
}

.scale {
  width: 100px;
  height: 10px;
  background-color: black;
  cursor: ns-resize;
}
</style>
