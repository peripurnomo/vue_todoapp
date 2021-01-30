<template>
  <div class="container">
    <div class="row bg-light my-2 p-3">
      <div class="col-12">
        <span class="d-inline-block bg-warning indicator"></span><small class="mr-2 font-italic"> Selesai</small>
        <span class="d-inline-block bg-primary indicator"></span><small class="font-italic"> Belum selesai</small>
      </div>

      <div class="col-12">
        <small class="text-muted font-italic">* Klik 2 kali untuk menandai selesai.</small>
      </div>
    </div>

    <div class="row bg-light my-2 p-3">
      <div
        class="col-12 my-2 rounded text-white bg-primary"
        v-bind:class="{'bg-warning is-complete':todo.completed}"
        :key="todo.id"
        v-for="todo in allTodos"
        @dblclick="onDblClick(todo)">

        <p class="my-4">
          {{ todo.title }}
        </p>
        
        <img @click="hapus(todo.id)" src="../assets/trash-2.svg">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'TodoList',
    
    methods: {
      ...mapActions(['ambil', 'hapus', 'update']),
      onDblClick(currentTodo) {
        const updateTodo = {
          id: currentTodo.id,
          title: currentTodo.title,
          completed: !currentTodo.completed
        }

        this.update(updateTodo)
      }
    },

    computed: mapGetters(['allTodos']),
    
    created() {
      this.ambil();
    }
  }
</script>

<style scoped>
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
</style>