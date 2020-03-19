<template>
  <div class="container">
      <!-- 导航  left-arrow 显示返回箭头   $router.go(-1) 这里是返回上一级页面 或者是 $router.back()-->
      <van-nav-bar title="搜索结果" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
