<template>

<!-- Container (Contact Section) -->
<div class="w3-padding-24  w3-text-white image" id="contact">
  <h3 class="w3-center">Contact us</h3>
  <p class="w3-center"><em>we would love your feedback!</em></p>
  <div class="paddin">

  <div class="w3-row w3-padding-32 w3-section">
    <div class="w3-col m4 w3-container">
      <!-- Add Google Maps -->
      <div id="googleMap" class="w3-round-large " style="width:50%;height:400px;">
        <GmapMap
           :center="{lat:10, lng:10}"
           :zoom="7"
           map-type-id="terrain"
           style="width: 200%; height: 70%"
        >
           <GmapMarker
           :key="index"
           v-for="(m, index) in markers"
           :position="m.position"
           :clickable="true"
           :draggable="true"
          @click="center=m.position"
          />
        </GmapMap>
      </div>

    </div>
    <div class="w3-col m8 w3-panel">
      <div class="w3-large w3-margin-bottom">
        <i class="fa fa-map-marker fa-fw w3-hover-text-grey w3-text-white w3-xlarge w3-margin-left"></i> Chicago, US<br>
        <i class="fa fa-phone fa-fw w3-hover-text-grey w3-text-white w3-xlarge w3-margin-left"></i> Phone: +00 151515<br>
        <i class="fa fa-envelope fa-fw w3-hover-text-grey w3-text-white w3-xlarge w3-margin-left"></i> Email: mail@mail.com<br>
      </div>
      <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
      <form action="/action_page.php" target="_blank">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
          </div>
          <div class="w3-half">
            <input class="w3-input w3-border" type="email" placeholder="Email" required name="Email">
          </div>
        </div>
        <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
        <button class="w3-button w3-black w3-right w3-section" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.image{
  background-image: url("https://wallpapercave.com/wp/DTvUQor.jpg");
}
.paddin{
  padding-top: 40px;
  padding-bottom: 0%;
}
</style>
