<template>
  <div class="row">
    <div fluid class="col-75">
      <div class="container">
        <form action="/action_page.php">

          <div class="row">
            <div class="col-50 amber--text">
              <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="name" placeholder="John M. Doe" v-validate="'required|alpha'">
              <span v-if="errors.has('name')">{{ errors.first('name') }}</span>
              <v-divider></v-divider>
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input   type="text" id="email" name="email" placeholder="john@example.com" v-validate="'required|email'">
              <span>{{ errors.first('email') }}</span>
              <v-divider></v-divider>
              <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" required>
              <v-divider></v-divider>
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York" required>
              <v-divider></v-divider>
              <div class="row">
                <div class="col-50">
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY">
                </div>
                <div class="col-50">
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" >
                </div>
              </div>
            </div>


    </div>

    </form>
  </div>
</div>
</div>

</template>

<script lang="">
  export default {
  }
</script>

<style scoped>
@import https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css;


.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;

}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: dark;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  border-color: #FFBD33;
}

input[type=text] {
  width: 100%;
  margin-bottom: 10px;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-color: #FFBD33  ;
}

label {
  margin-bottom: 10px;
  display: block;
background-color: amber;
float: left;
padding-left: 10px;

}





/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
