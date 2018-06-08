<!--1stimage-->
<template>
  <div id="sth">

  <vue-particles
        color="#efc402"
        :particleOpacity="0.7"
        :particlesNumber="160"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
#particles-js {
	background-image: url("https://cdn.wallpapersafari.com/71/30/ATSsZK.jpg");
  width: 100%;
  height: 100%;
}
#sth{
  margin-top: 50px

}
</style>
