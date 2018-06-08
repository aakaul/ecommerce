    <template>
    <div class="infobanner">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg" title="Avengers : Infinity War" description="Thanos is around" duration="2hrs"/>
          </swiper-slide>
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg" title="Thor : Ragnarok" description="Thor lost his hair" duration="2hrs30mins"/>
          </swiper-slide>
          <!-- more movies -->
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg" title="Black Panther" description="Wakanda Forever" duration="2hrs15mins"/>
          </swiper-slide>
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg" title="Avengers : Infinity War" description="Thanos is around" duration="2hrs"/>
          </swiper-slide>
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg" title="Thor : Ragnarok" description="Thor lost his hair" duration="2hrs30mins"/>
          </swiper-slide>
          <!-- more movies -->
          <swiper-slide>
            <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg" title="Black Panther" description="Wakanda Forever" duration="2hrs15mins"/>
          </swiper-slide>


          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
    </template>
 <script>
    import Movie from './assts/productdisplaybanner.vue'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      name: 'infobanner',
      components: {
        Movie,
        swiper,
        swiperSlide
      },
      data() {
        return {
          swiperOption: {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: '3',
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : false
              },
              pagination: {
                el: '.swiper-pagination'
              }
            }
        }
      }
    }
    </script>

    <style scoped>
    .swiper-slide{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .swiper-container {
      height : 400px;
    }
    .infobanner{
      padding-bottom: 10%;
      padding-top: 10%;
      background-image: url("https://cdn.wallpapersafari.com/71/30/ATSsZK.jpg")
    }
    </style>
