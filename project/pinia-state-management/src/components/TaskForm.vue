<template>
  <form @submit.prevent="addTask">
    <input
        type="text"
        placeholder="I need to..."
        v-model="taskName"
    >
    <button>Add</button>
  </form>
</template>

<script>


import {useTaskStore} from "@/store/TaskStore";
import {ref} from "vue";

export default {
  name: "TaskForm",
  setup() {
    const taskStore = useTaskStore();

    const taskName = ref(null);

    return {
      taskStore, taskName
    }
  },

  methods: {
    addTask() {
      this.taskStore.addTask({
        title: this.taskName,
        id: Math.floor(Math.random() * 10) + 1,
        isFav: false
      });
    }
  }
}
</script>
