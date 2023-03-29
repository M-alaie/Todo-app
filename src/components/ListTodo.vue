<template >
  <li class="card">
    <div class="cb-container">
      <input type="checkbox" :checked="todo.iscomplete ? true : null" class="cb-input" @click="ChangeStatus">
      <span class="check"></span>
    </div>
    <p class="item">{{ todo.title }}</p>
    <buttton class="clear" @click="DeleteTodo">
      <img :src="CrossImage" alt="">
    </buttton>
  </li>
</template>


<script>
import cross from "../assets/images/icon-cross.svg"
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      CrossImage: cross,

    }
  },
  methods: {
    DeleteTodo() {
      if (confirm("ایا از حدف خود اطمینان دارید؟"))
      this.$emit("deleted" , this.todo.id)
    },
    ChangeStatus(){
      this.$emit("NewStatus", !this.todo.iscomplete , this.todo.id )
      
    }
  }
}
</script>