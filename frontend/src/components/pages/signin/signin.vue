<template lang="html">
  <div id="login">
        <v-container fluid>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm6 >
              <v-card app dark >
                <v-toolbar dark class="amber--text">
                  <v-btn icon>
                    <v-icon color="amber">arrow_back</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-toolbar-title>Compose</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon color="amber">info</v-icon>
                  </v-btn>
                </v-toolbar>
                      <v-card  >
                          <v-btn   v-for="bar in bars" :key="i" @click="direct"  class="amber--text">
                            <a href="/auth"></a>
                            <v-icon  left >fa-{{bar}}</v-icon>
                            <span right sm1>{{bar}}</span>
                          </v-btn>
                      </v-card>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {

    data: () => ({
      bars:[
        "facebook",
        "google",
        "twitter",
        "linkedin",
        "instagram",
        "slack",
        "yahoo",
        "snapchat",
        "skype",
        "reddit",
        "pinterest",
        "amazon"
      ]
    }),
    computed:{
      direct(bar)
      {
        const auth= this.bar(auth=>{
          return{
            auth
          }
  
        })

      }
    }


  }
</script>

<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
#login{
  background-image: url("http://www.cnbinggui.net/data_images/wallpapers/4/338196-background-image.jpg");
  width:100%;
}

</style>
