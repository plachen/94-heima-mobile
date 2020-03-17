import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 用按需加载的方式配置路由
const Layout = () => import('@/views/layout') // 按需引入layout
const home = () => import('@/views/home') // 按需引入home 二级路由
const question = () => import('@/views/question') // 按需引入question二级路由
const video = () => import('@/views/video') // 按需引入video  二级路由
const user = () => import('@/views/user') // 按需引入user 二级路由
// 其他的一级路由组件
const chat = () => import('@/views/user/chat') // 小智同学组件
const login = () => import('@/views/login') // 登录模块
const profile = () => import('@/views/user/profile') // 编辑资料模块
const search = () => import('@/views/search') // 搜索中心模块
const searchresult = () => import('@/views/search/result') // 搜索结果模块
const article = () => import('@/views/article')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout, // 布局组件 一级路由
    children: [{
      path: '', // 如果path什么都不写 默认就是二级路由的默认组件
      component: home
    }, {
      path: '/question',
      component: question // 问答组件
    }, {
      path: '/video',
      component: video // 视频组件
    }, {
      path: '/user',
      component: user // 用户组件
    }]
  }, {
    path: '/user/chat', // 一级路由小智同学
    component: chat
  }, {
    path: '/login', // 一级路由登录页
    component: login
  }, {
    path: '/user/profile', // 一级路由登录页
    component: profile
  }, {
    path: '/search', // 一级路由搜索中心
    component: search
  }, {
    path: '/search/result', // 一级路由搜索结果
    component: searchresult
  }, {
    path: '/article', // 一级路由文章详情
    component: article
  }
]

const router = new VueRouter({
  routes
})

export default router
