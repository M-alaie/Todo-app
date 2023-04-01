<template>
    <header>
        <header class="card">
    <h1>لیست وظایف </h1>

    <button id="theme-switcher" @click="ImgChange">
      <img  v-if="defaultTheme=='dark'" :src="Sun" alt="Change color theme" />
      <img v-else :src="Moon" alt="Change color theme" />

    </button>
  </header>
    </header>
</template>

<script>
import img from "../assets/images/icon-sun.svg"
import ImgMoon from "../assets/images/icon-moon.svg"
export default {
  data(){
    return{
      Sun:img,
      Moon:ImgMoon,
      defaultTheme:'dark'
    }
  },
  methods:{
    ImgChange(){
      if(this.defaultTheme=='dark'){
        this.defaultTheme="light"
        document.body.classList.add("light")
      }else{
        this.defaultTheme='dark'
        document.body.classList.remove("light")
      }
    }
  }
}
</script>