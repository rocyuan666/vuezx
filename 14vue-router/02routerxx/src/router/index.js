import Vue from "vue"
import VueRouter from "vue-router"

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

// 路由懒加载的导入方式：
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')

const About = () => import('../components/About')
const User = ()=> import('../components/User')
const Profile = () => import('../components/Profile')

// 1.注册插件
Vue.use(VueRouter);

// 创建vuerouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 导航守卫
router.beforeEach(function(to, from, next){
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})

export default router

