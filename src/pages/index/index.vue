<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CustomNavbar from '@/pages/index/compomemts/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/compomemts/CategoryPanel.vue'
import HotPanel from '@/pages/index/compomemts/HotPanel.vue'
import PageSkeleton from '@/pages/index/compomemts/PageSkeleton.vue'
import type { YimingGuessInstance } from '@/types/component'
// 轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
// 分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
//获取猜你喜欢数据
const guessRef = ref<YimingGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 刷新
const onRefresherrefresh = async () => {
  // 刷新后打开下拉刷新
  isTriggered.value = true
  // await getHomeHotData()
  // await getHomeBannerData()
  // await getHomeCategoryData()
  guessRef.value?.resetData()
  await Promise.all([
    getHomeHotData(),
    getHomeBannerData(),
    getHomeCategoryData(),
    guessRef.value?.getMore(),
  ])
  // 刷新后关闭下拉刷新
  isTriggered.value = false
}
// 刷新后是否触发下拉刷新
const isTriggered = ref(false)
const isLoading = ref(false)
// 页面加载时获取数据
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  // 页面加载完成后关闭骨架屏
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroller-view"
    scroll-y
  >
    <!-- 页面骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <YimingSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门话题 -->
      <!--TODO: 热门话题组件-->
<!--      <HotPanel :list="hotList" />-->
      <!--校园墙 -->
      <!--TODO: 校园墙组件-->
<!--      <YimingGuess ref="guessRef" />-->
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroller-view {
  flex: 1;
}
</style>
