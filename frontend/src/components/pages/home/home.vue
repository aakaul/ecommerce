<template>
  <div class="w3-mobile">
    <navbar></navbar>
    <banner></banner>
   <productinfo></productinfo>
    <productdisplay></productdisplay>
    <contactus></contactus>
    <fooTer></fooTer>
  </div>
</template>

<script>
import productinfo from './productinfo';
import productdisplay from './productdisplay';
import banner from './banner';
import navbar from './navbar';
import contactus from './contactus';
import footer from "./footer";
  export default {
    components:{
      productinfo,
      productdisplay,
      banner,
      navbar,
      contactus,
      'fooTer':footer
    }
  }
</script>

<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
</style>
