<template>
  <main>
    <header>
      <img src="@/assets/logo.png" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <!-- Task list -->

    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks [{{ taskStore.allCount }}]</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <!-- Task list -->

    <div class="task-list" v-if="filter === 'favs'">
      <p>Favorite Tasks [{{ taskStore.favCount }}]</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>

import {useTaskStore} from "@/store/TaskStore";
import TaskForm from "@/components/TaskForm.vue";
import TaskDetails from "@/components/TaskDetails.vue";
import {ref} from "vue";

export default {
  name: 'App',

  setup() {
    const taskStore = useTaskStore();

    const filter = ref('all');

    return {
      taskStore, filter
    }
  },



  components: {
    TaskDetails,TaskForm
  }
}
</script>

