// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入vuex
import  Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
  state:{
    //this.$store.state.***
    count: 0,
  },
  mutations:{
    //this.$store.commit('方法名','按需传入参数')
    increment: state => state.count++,
    decrement: state => state.count--
  },
  getters:{
    //this.$store.getters.***
    count:function (state,getters) {
      return state.count;
    }
  },
  computed:{

  }
});
//导入mintUI

import 'mint-ui/lib/style.css'
//导入animate动画
import animated from 'animate.css' // npm install animate.css --save安装，再引入
//导入MUI
import './assets/lib/mui/css/mui.min.css'
import './assets/lib/mui/css/icons-extra.css'
import './assets/lib/mui/js/mui'
import {Swipe, SwipeItem, Header, Tabbar, TabItem} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(animated);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
