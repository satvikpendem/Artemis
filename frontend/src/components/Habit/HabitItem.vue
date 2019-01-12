<template>
  <div class="habit-item">
    <div class="wrapper">
      <div class="task" @click="increment">
        <span id="titleId">{{ title }}</span>
        <div class="counter-container">
          <span id="counterId">
            {{ counter }}
            <span v-if="max_value">/ {{max_value}}</span>
          </span>
        </div>
      </div>
      <button id="minus" @click="decrement">
        <img src="https://image.flaticon.com/icons/svg/42/42977.svg" alt="minus sign">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HabitItem",
  props: {
    title: { type: String, default: "Habit" },
    max_value: { type: Number },
    min_value: { type: Number, default: 0 }
  },
  data() {
    return {
      counter: 0,
      max: this.$props.max_value
    };
  },
  methods: {
    checkRange(num) {
      if (this.max) {
        return num >= 0 && num <= this.max;
      } else {
        return num >= 0;
      }
    },
    increment() {
      if (this.checkRange(this.counter + 1)) this.counter++;
    },
    decrement() {
      if (this.checkRange(this.counter - 1)) this.counter--;
    }
  }
};
</script>

<style scoped>
.habit-item {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
}

.wrapper {
  display: flex;
  user-select: none;
}

.task {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  font-family: Helvetica;
  background: rgba(81, 0, 255, 0.1);
  border-radius: 5px;

  color: #100033;
}

#minus {
  opacity: 0;
  background: none;
  border: none;
  font-size: 1em;
  color: rgba(81, 0, 255, 0.1);
}

.wrapper:hover #minus {
  opacity: 1;
}

#titleId {
  margin: auto;
  margin-left: 10px;
  text-align: center;
}

.counter-container {
  background: #854dff;
  border-radius: 5px;
  margin: 0.75rem;
  height: 60%;
  min-width: 30px;
  width: auto;
  text-align: center;
  transition: width 0.5s;
}

#counterId {
  color: white;
  margin: 10px;
}
</style>
