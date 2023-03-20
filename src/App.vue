<template>
<AppHeader></AppHeader>
  <main>
    <AddTodo ></AddTodo>
    <ul class="todos">
      <ListTodo v-for="(item,index) in todos" :key="index" :todo="item"></ListTodo>
    </ul>
    <div class="card stat">
      <p class="corner"><span id="items-left">0</span> مورد باقی مانده</p>
      <div class="filter">
        <button id="all" class="on">همه</button>
        <button id="active">فعال</button>
        <button id="completed">تکمیل</button>
      </div>
      <div class="corner">
        <button id="clear-completed">حذف تکمیل شده ها</button>
      </div>
    </div>
  </main>
  <AppFooter></AppFooter>
 
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AddTodo from './components/AddTodo.vue'
import ListTodo from './components/ListTodo.vue';

export default {
  data(){
    return{
      todos:[
        {title:"یادگیری در Vue", iscpmplete:false},
        {title:" یاد گیری جاوا اسکریپت", iscpmplete:true}

      ]
    }
  },
  name: 'App',
  components: {AppHeader, AppFooter,AddTodo,ListTodo}
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
