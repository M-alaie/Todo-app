<template >
 <li class="card">
  <div class="cb-container">
    <input type="checkbox" :checked="todo.iscomplete ? true : null" class="cb-input">
    <span class="check" ></span>
  </div>
  <p class="item" >{{ todo.title }}</p>
  <buttton class="clear">
    <img :src="CrossImage" alt="">
  </buttton>
 </li>

</template>


<script>
import cross from "../assets/images/icon-cross.svg" 
export default {
  props:{
        todo:Object
      },
    data(){
      return{
        CrossImage:cross,
        
      }
    }
}
</script>