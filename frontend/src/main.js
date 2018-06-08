// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'
import * as VueGoogleMaps from "vue2-google-maps";
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCsQjil2Icovniz65fxihLs0HrD7Z7RSE8",
    libraries: "places" // necessary for places input
  }
});



Vue.use(VueParticles)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
