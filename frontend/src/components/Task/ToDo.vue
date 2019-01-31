<template>
  <div class="to-do">
    <span id="to-do-label">To-Do</span>
    <div class="task-gen-list" v-for="(task) in tasks" v-bind:key="task.index">
      <template class="task-item">
        <task-item
          :title.sync="task.title"
          :duration.sync="task.duration"
          :running.sync="task.running"
          :completed.sync="task.completed"
          @completeTask="moveTaskToCompleted"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "to-do"
};
</script>

<style scoped>
.to-do {
  text-align: center;
  background: red;
}
#to-do-label {
  margin-bottom: 2rem;
  font-size: calc(1rem + 1.5vw);
}
</style>
