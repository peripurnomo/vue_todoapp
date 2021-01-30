<template>
  <TodoList/>
</template>

<script>
  import TodoList from '../components/TodoList.vue';

  export default {
    name: 'app',
    components: {
      TodoList,
    }
  }
</script>
