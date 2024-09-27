<template>

  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.removeTask(task.id)">delete</i>
      <i class="material-icons" @click="taskStore.setFav(task.id)" :style="{color: task.isFav ? 'red' : ''}">favorite</i>
    </div>
  </div>

</template>

<script>

  import {useTaskStore} from "@/store/TaskStore";

  export default {
  props: ['task'],

  data() {
    return {
      taskStore: useTaskStore(),
    }
  }
}
</script>