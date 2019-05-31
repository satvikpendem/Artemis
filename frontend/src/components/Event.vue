<template>
  <div class="event" draggable="true">
    <!-- @mousemove.prevent="doScale" -->
    <!-- <div class="scale" @mousedown.prevent="startScaling"></div> -->
    <div class="box" :style="styleObject">
      <div id="wh">{{ eventLength }} minutes</div>
    </div>
    <div class="scale" @mousedown.prevent="startScaling"></div>
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
      MIN_LENGTH: 30,
      TEMP_LENGTH: 0
    };
  },
  props: ["event"],
  computed: {
    styleObject: function() {
      return {
        width: this.width + "px",
        height: this.height + "px"
      };
    },
    height: {
      get: function() {
        return this.event.length;
      },
      set: function(newVal) {
        this.event.length = newVal;
      }
    },
    eventLength: function() {
      return this.height / this.STEP;
    }
  },
  methods: {
    startScaling() {
      this.isScaling = true;
      this.TEMP_LENGTH = this.height;
    },
    stopScaling() {
      this.isScaling = false;
      this.TEMP_LENGTH = 0;
    },
    doScale(e) {
      if (this.isScaling) {
        this.TEMP_LENGTH += e.movementY;
        if (
          this.TEMP_LENGTH % this.STEP == 0 &&
          this.TEMP_LENGTH >= this.MIN_LENGTH
        ) {
          this.height = this.TEMP_LENGTH;
        }
      }
    }
    // startDragging() {
    //   this.isDragging = true;
    // },
    // stopDragging() {
    //   this.isDragging = false;
    // },
    // doDrag(event) {
    //   if (this.isDragging) {
    //     console.log(event.clientY);
    //     if (event.clientY % this.STEP == 0) {
    //       this.h = event.clientY;
    //     }
    //   }
    // }
  },
  mounted() {
    window.addEventListener("mousemove", this.doScale);
    window.addEventListener("mouseup", this.stopScaling);
    window.addEventListener("mouseup", this.stopDragging);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.doScale);
    window.removeEventListener("mouseup", this.stopScaling);
    window.removeEventListener("mouseup", this.stopDragging);
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
  /* width: 100px; */
  /* height: 100px; */
  /* margin: 100px; */
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
