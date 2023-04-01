<template>
  <AppHeader></AppHeader>
  <main>
    <TodoAdd @NewCreateTodo="AddTodo"></TodoAdd>
    <ul class="todos">
      <ListTodo v-for="(item, i) in getTodo" @dragover.prevent @dragstart="dragStart(i)" @drop="dropEnd(i)" :key="item.id"
        :todo="item" @deleted="deleteTodo" @NewStatus="NewChangeStatus"></ListTodo>
    </ul>
    <div class="card stat">
      <p class="corner"><span id="items-left">{{ ActiveTodosCounter }}</span> مورد باقی مانده</p>
      <div class="filter">
        <button id="all" @click="ChangeTab('all')" :class="{ 'on': activetab == 'all' }">همه</button>
        <button id="active" @click="ChangeTab('active')" :class="{ 'on': activetab == 'active' }">فعال</button>
        <button id="completed" @click="ChangeTab('completed')" :class="{ 'on': activetab == 'completed' }">تکمیل</button>
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

      ],
      // ما باید dragstart را یکجا ذخیره بکنیم
      dragging: -1,
      activetab: "all"

    }
  },
  methods: {
    ChangeTab(tab) {
      this.activetab = tab
    },

    AddTodo(title) {

      const id = Math.random().toString(16).slice(2)
      const PushTodo = { id, title, iscomplete: false }
      this.todos.push(PushTodo);
      this.$notification.error("hello world", { infiniteTimer: false });

      
        

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
    dragStart(index) {
      this.dragging = index
    },
    dropEnd(index) {
      let ElementDragging = this.todos.splice(this.dragging, 1)[0]
      this.todos.splice(index, 0, ElementDragging)
      // console.log(this.todos.splice(index, 0, ElementDragging));
      // console.log(ElementDragging);
      // console.log(this.dragging);
      // console.log(index);
    },


  },
  computed: {
    // ActiveTodosCounter(){
    //   return this.todos.filter(f=>f.iscomplete==false).length
    // },
    getTodo() {
      switch (this.activetab) {
        case "all":
          return this.todos;
        case "active": return this.todos.filter(f => f.iscomplete == false);
        case "completed": return this.todos.filter(f => f.iscomplete == true);
        default:
          return []

      }

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
