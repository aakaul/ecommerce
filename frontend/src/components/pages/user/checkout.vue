<template>
<div id="checkout">
<v-app>
  <v-container>
    <v-stepper dark v-model="e13" vertical>
        <v-divider></v-divider>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-step  dark step="1" :complete="e13 > 1">Name of step 1</v-stepper-step>
        <v-stepper-content step="1">
          <v-card dark class="mb-1" height="100%">
           <addform />
          </v-card>
          <v-btn color="amber" @click.native="e13 = 2">Continue</v-btn>
          <v-btn color="amber" >Cancel</v-btn>
        </v-stepper-content>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e13 > 2">Name of step 2</v-stepper-step>
        <v-stepper-content step="2">
          <v-card dark width="100%" class="mb-5  amber--text" height="100%">
            <span>payment</span>
            <v-divider></v-divider>
            <span>cart</span>
            <v-icon class="subhead">shopping_cart</v-icon>
            <v-divider></v-divider>
            <span class="contentcart">
            <p><a href="#">Product 1</a> <span class="price">$15</span></p>
     <p><a to="#">Product 2</a> <span class="price">$5</span></p>
     <p><a to="#">Product 3</a> <span class="price">$8</span></p>
     <p><a to="#">Product 4</a> <span class="price">$2</span></p>
     <v-divider></v-divider>
     <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
   </span>
           </v-card>

          <v-btn color="amber" class="black--text" @click.native="e13 = 3">pay now</v-btn>
          <v-btn  color="amber black--text" >Cancel</v-btn>
        </v-stepper-content>
        <v-divider></v-divider>
        <v-stepper-step color="green" step="3" :complete="e13 > 3">Name of step 3</v-stepper-step>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-5" height="200px">

          </v-card>
          <v-btn color="amber" @click.native="e13 = 1"></v-btn>
          <v-btn color="amber" >Cancel</v-btn>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-container>
</v-app>
</div>
</template>
<script>
import addform from './addresssform.vue';
  export default {
    data () {
      return {
        e13:1
      }
    },
    components:{
      addform
    }
  }
</script>
<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
span.price {
  float:;
  padding-left: 40%;
  color: amber;
};
span.contentcart{
  float: left;

color: amber;
};
#checkout{
  background-image: url('https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg');
}

</style>
