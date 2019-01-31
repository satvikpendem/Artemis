<template>
  <div id="task-view">
    <main-header/>
    <main id="task-container">
      <to-do :tasks="tasks" id="to-do"/>
      <current id="current"/>
      <completed id="completed"/>
    </main>
  </div>
</template>

<script>
import MainHeader from "@/components/_global/MainHeader.vue";

import ToDo from "@/components/Task/layout/ToDo.vue";
import Current from "@/components/Task/layout/Current.vue";
import Completed from "@/components/Task/layout/Completed.vue";

export default {
  name: "task-view",
  components: {
    MainHeader,
    ToDo,
    Current,
    Completed
  },
  data() {
    return {
      tasks: [
        {
          title: "test",
          duration: 10
        }
      ]
    };
  }
};
</script>

<style scoped>
#task-container {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

#to-do,
#completed {
  flex: 3;
}

#current {
  flex: 4;
}

@media (max-width: 900px) {
  #task-container {
    flex-direction: column;
  }

  #to-do {
    order: 2;
  }

  #current {
    order: 1;
  }

  #completed {
    order: 3;
  }
}
</style> 