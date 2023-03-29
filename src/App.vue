<template>
  <AppHeader></AppHeader>
  <main>
    <TodoAdd @NewCreateTodo="AddTodo"></TodoAdd>
    <ul class="todos">
      <ListTodo v-for="(item, i) in todos" @dragover.prevent @drap="dropStart(i)" :key="item.id" :todo="item"
        @deleted="deleteTodo" @NewStatus="NewChangeStatus"></ListTodo>
    </ul>
    <div class="card stat">
      <p class="corner"><span id="items-left">0</span> مورد باقی مانده</p>
      <div class="filter">
        <button id="all" class="on">همه</button>
        <button id="active">فعال</button>
        <button id="completed">تکمیل</button>
      </div>
      <div class="corner">
        <button id="clear-completed" @click="deletedcomplete">حذف تکمیل شده ها</button>
      </div>
    </div>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from './components/AddHeader.vue';
import AppFooter from './components/AppFooter.vue';
import TodoAdd from './components/TodoAdd.vue';
import ListTodo from './components/ListTodo.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter, TodoAdd, ListTodo },

  data() {
    return {
      todos: [

      ]


    }
  },
  methods: {

    AddTodo(title) {
    
      const id = Math.random().toString(16).slice(2)
      const PushTodo = { id, title,iscomplete:false}
      this.todos.push(PushTodo)

    },
    deleteTodo(id) {
      this.todos = this.todos.filter(f => f.id != id)
    },
    NewChangeStatus(status, id) {
      let Newtodos = [...this.todos];
      let SelectedTodo = Newtodos.find((f) => f.id === id);
      SelectedTodo.iscomplete = status;
      this.todos = Newtodos

    },
    deletedcomplete() {
      if (confirm("آیا از انجام عملیات اطنینان دارید؟")) {
        let deletedtodos = [...this.todos]
        deletedtodos = deletedtodos.filter((fil) => fil.iscomplete === false)
        this.todos = deletedtodos
      }
    },
    dragStart(index){
      console.log(index);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
