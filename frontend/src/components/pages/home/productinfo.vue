<template>
 <div id="app">
  <v-app id="inspire">
    <v-parallax src="https://www.walldevil.com/wallpapers/a74/engine.jpg" height="560">
      <v-layout column align-center justify-right>
        <h1 class="white--text">Vuetify.js</h1>
        <h4 class="white--text">Build your application today!</h4>
       </v-layout>
        <div>
          <v-flex right bottom offset xs1 >
        <v-btn small fab dark color="indigo">
        <v-icon dark>add</v-icon>
      </v-btn>
      <v-btn small fab dark color="teal">
        <v-icon dark>list</v-icon>
      </v-btn>
      </v-flex>
      </div>
    </v-parallax>
  </v-app>
</div>
</template>

<script>

  export default {

  }
</script>

<style scoped>

</style>
