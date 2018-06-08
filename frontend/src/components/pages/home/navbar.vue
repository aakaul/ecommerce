
<template>
<v-layout  app dark justify-space-around>

    <!--navdeaw-->
    <v-navigation-drawer clipped  width="200" temporary  v-model="drawer" app  class="black lighten-3 amber--text" >
     <v-list dense>
       <v-list-tile @click="">
         <v-list-tile-action>
           <v-icon>dashboard</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title>Dashboard</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
       <v-list-tile @click="">
         <v-list-tile-action>
           <v-icon>settings</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title>Settings</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
   </v-navigation-drawer>
   <!--navdeaw-->

<!--toolbar-->
   <v-toolbar  app fixed clipped-left dark color="black" height="50px">
     <v-toolbar-side-icon class="amber--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title class="amber--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>

    <a>
      <v-text-field class="amber--text" v-on:keyup="checkKeyUp" solo v-model="searchParams"
      clearable prepend-icon="search"   :prepend-icon-cb="search"  ></v-text-field>
    </a>

    <v-tooltip class="amber--text" bottom>
      <v-btn  class="amber--text" slot="activator" icon :to="{ path: '/shopping', params: {userId: 123} }">
        <v-badge right color="amber--text" small>
        <span slot="badge">12</span>
        <v-icon class="amber--text">shopping_cart</v-icon>
      </v-badge>
      </v-btn>
      <span class="amber--text">Shopping cart</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn slot="activator" icon @click.native.stop="dialog = true">
       <a v-show="dialog"><login/></a>
        <v-icon class="amber--text">exit_to_app</v-icon>
        <v-dialog
          v-model="dialog"
          full-width
          height="100%"
          max-width="100%"
          justify-center
        >
        <login/>
        </v-dialog>
      </v-btn>
      <span class="amber--text">login</span>
    </v-tooltip>
  </v-toolbar>
  <!--toolbar-->


</v-layout>

</template>
<script lang="">
import login from '../signin/signin.vue';
export default {
  // Options / Data
  data() {
    return {
      searchParams:'',
      drawer: false,
      dialog:false
    }
  },
   props: {
     source: String,

   },
   components:{
     login

   },
  methods: {
        search: ()=> {
              console.debug('searching', this.searchParams)
          },
          clearSearch:()=> {
              this.searchParams = ''
          },
          checkKeyUp:(event)=> {
              if (event.key === 'Enter') {
                  this.search()
              }
          }
},
}
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons";
</style>
