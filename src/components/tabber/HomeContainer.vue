<template>
  <div>
    <mt-swipe :auto="4000" :speed="800">
      <mt-swipe-item><img src="../../assets/images/ktv1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/ktv2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/ktv3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <img src="../../assets/images/z1.png" alt=""/>
          <div class="mui-media-body">Home</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist1">
          <img src="../../assets/images/z2.png" alt="">
          <div class="mui-media-body">Email</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../assets/images/z3.png" alt="">
        <div class="mui-media-body">Chat</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../assets/images/z4.png" alt="">
        <div class="mui-media-body">location</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../assets/images/z5.png" alt="">
        <div class="mui-media-body">Search</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
        <img src="../../assets/images/z6.png" alt="">
        <div class="mui-media-body">Phone</div>
      </a></li>
    </ul>
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
    <br><br><br><br><br><br>1111111
  </div>
</template>

<script>
  export default {
    name: "HomeContainer"
  }
</script>

<style scoped lang="less">
  .mint-swipe {
    height: 20vh;

    .mint-swipe-items-wrap {
      .mint-swipe-item {
        &:nth-child(1) {
          background-color: rebeccapurple;
        }

        &:nth-child(2) {
          background-color: #ff452e;
        }

        &:nth-child(3) {
          background-color: #1afff8;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

  }

  .mui-table-view {
    background-color: white;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;

    img {
      width: 60%;
    }
  }
</style>
