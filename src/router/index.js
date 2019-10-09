import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabber/HomeContainer'
import MemberContainer from '../components/tabber/MemberContainer'
import SearchContainer from '../components/tabber/SearchContainer'
import ShopCartContainer from '../components/tabber/ShopCartContainer'
import NewsList from '../components/news/NewsList'
import NewsList1 from '../components/news/NewsList1'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcart',component:ShopCartContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newslist1',component:NewsList1}
  ],
  linkActiveClass:'mui-active'
})
