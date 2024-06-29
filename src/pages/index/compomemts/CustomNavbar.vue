<script setup lang="ts">
//获取安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//console.log('safeAreaInsets', safeAreaInsets)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <text class="logo-text">宁波诺丁汉大学校园墙</text>
    </view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-color: #92e666;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20rpx;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-top: 20rpx;
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      font-size: 36rpx;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
