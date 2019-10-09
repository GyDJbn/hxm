<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--<transition name="tabber"-->
                <!--mode="out-in"-->
                <!--enter-active-class="animated bounceInRight">-->
      <!--<router-view class="container"/>-->
    <!--</transition>-->
    <transition name="tabber">
      <router-view class="container"/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart "><span class="mui-badge">{{$store.getters.count}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
  .container{
    margin-top: 2.5rem;
  }
  #app {
    overflow-x: hidden;
  }
  #app .is-selected {
    color: #f66eb0;
  }

  .tabber-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .tabber-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .tabber-enter-active,.tabber-leave-active{
    transition: all 1s ease;
  }
  .mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }

  .mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }




</style>
