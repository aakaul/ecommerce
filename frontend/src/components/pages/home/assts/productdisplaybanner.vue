<template>

        <div class="displaybanner" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <div class="content">
          <h1 class="title">{{ title }}</h1>
          <p class="description">{{ description }}</p>
          <p class="Price">{{ price }}</p>
        </div>
      </div>

</template>

<script>
  export default {
    props:[
      'image',
      'title',
      'description',
      'price'

    ],
  }
</script>

<style scoped>

h1, h2 {
      font-weight: normal;
      position: relative;

    }
    .displaybanner{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      text-align: left;
      padding: 10px;
      width : 250px;
      height : 400px;
      background-repeat: no-repeat;
      background-blend-mode: overlay;
      background-size: cover;
    }
    p{

    }

</style>
