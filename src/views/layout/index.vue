<template>
  <div class="container">
    <!-- 头 导航组件  采用vant组件导航  fixed表示固定在顶部-->
    <!-- 当页面地址是/user的时候应该隐藏掉导航栏v-if 否则不隐藏 因为点击切换的时候 用户界面和其他一级路由的页面是不一样的 -->
   <!-- @ 事件名可以直接跟逻辑 $router.push('/search') 点击右边按钮跳转到搜索页 -->
    <van-nav-bar @click-right="$router.push('/search')" fixed title="黑马头条" right-text="搜索" v-if="$route.path!=='/user'"></van-nav-bar>
    <!-- 二级路由容器 -->
    <!-- 判断当前的地址如果地址是/user 就给一个notopclass样式 -->
    <div class="my-wrapper" :class="{noTop:$route.path==='/user'}">
      <router-view></router-view>
    </div>

    <!-- 底 标签栏组件 -->
    <!-- 加个route属性表示开启路由模式 -->
    <van-tabbar route>
        <!-- 应该点击导航的标签跳转路由 -->
        <!-- 一旦启用路由模式 van-tabbar-item就可以当作router-link使用 -->
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="shop-collect-o"  to="/question">问答</van-tabbar-item>
        <van-tabbar-item icon="video-o"  to="/video">视频</van-tabbar-item>
        <van-tabbar-item icon="user-o"  to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper {
      //控制二级路由容器
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
