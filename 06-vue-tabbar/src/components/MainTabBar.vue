<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-active" src="../assets/img/tabbar/home.svg" alt="首页">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="分类">
      <img slot="item-icon-active" src="../assets/img/tabbar/category.svg" alt="分类">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/news" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/news.svg" alt="发现">
      <img slot="item-icon-active" src="../assets/img/tabbar/news.svg" alt="发现">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/shoppingCart.svg" alt="购物车">
      <img slot="item-icon-active" src="../assets/img/tabbar/shoppingCart.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="我的">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile.svg" alt="我的">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
