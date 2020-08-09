<template>
  <div>
    <swiper :options="swiperOptions"
            :auto-update="true">
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/871047ff8645abbfcf209440a11dc84e.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/cba0b89f005e1f99c8231514c324ddb2.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/a38b036a42650ef89e248bfe6d2b2a6d.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home"
           slot="pagination"></div>
    </swiper>
    <!-- end of swipper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"
             v-for="i in 10 "
             :key="i">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="py-2 bg-light d-flex ai-center jc-center fs-sm ">
        <i class="sprite sprite-arrow"></i>
        <span class="pl-1">收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-card title="新闻资讯"
            icon="Menu"
            :categories="newsCats">
      <template #items="{category}">
        <div class="py-2"
             v-for="(news,i) in category.newsList"
             :key="i">
          <span>{{news.categoryName}}</span>
          <span>|</span>
          <span>{{news.titile}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
        // Some Swiper option/callback...
      },
      newsCats:[
        {
          name:'热门',
          newsList:new Array(5).fill({
            categoryName:'公告',
            titile:'2020年王者荣耀世界冠军杯第二轮选拔赛',
            date:'08/06',  
          })
        },
        {
          name:'新闻',
          newsList:new Array(5).fill({
            categoryName:'公告',
            titile:'2020年王者荣耀世界冠军杯第二轮选拔赛',
            date:'08/06',  
          })
        },
        {
          name:'赛事',
          newsList:new Array(5).fill({
            categoryName:'公告',
            titile:'2020年王者荣耀世界冠军杯第二轮选拔赛',
            date:'08/06',  
          })
        },
        {
          name:'公告',
          newsList:new Array(5).fill({
            categoryName:'公告',
            titile:'2020年王者荣耀世界冠军杯第二轮选拔赛',
            date:'08/06',  
          })
        },
        {
          name:'活动',
          newsList:new Array(5).fill({
            categoryName:'公告',
            titile:'2020年王者荣耀世界冠军杯第二轮选拔赛',
            date:'08/06',  
          })
        }
      ]
    }
  },
}
</script>

<style lang='scss'>
@import "../assets/iconfont/iconfont.css";
@import "../assets/scss/virable";
.pagination-home {
  bottom: 0;
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
.sprite {
  background: url("../assets/images/index.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-arrow {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: 38.577% 52.076%;
  }
}
</style>