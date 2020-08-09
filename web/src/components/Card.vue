<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont"
         :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont"
         :class="`icon-${icon}`"></i>
    </div>
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div class="nav-item"
             v-for="(category,i) in categories"
             :class="{active:active === i}"
             :key="i"
             @click="active = i">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="(category,i) in categories"
                        :key="i">
            <slot name="items"
                  :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data () {
    return {
      active: 0,
    }
  },
}
</script>

<style lang='scss'>
@import "../assets/scss/_virable.scss";
.card {
  border-bottom: 1px solid $border-color;
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>