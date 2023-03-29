<template>
     <div class="card add">
      <div class="cb-container">
        <button id="add-btn" @click="addBtn" >+</button>
      </div>
      <div class="txt-container">
        <label for="addt">افزودن </label>
        <input type="text" class="txt-input" v-model="TodoTitle" placeholder="افزودن وظیفه جدید..." spellcheck="false" autocomplete="off"
          id="addt" dir="rtl" @keypress.enter="addBtn"/>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            TodoTitle:""
        }
    },
    methods:{
        addBtn(){     
        this.$emit('NewCreateTodo', this.TodoTitle)
            this.TodoTitle="";
           
        }
    }
}
</script>