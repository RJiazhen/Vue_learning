<template>
  <div class="row">
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <!-- 使用keep-alive标签设置不销毁的组件，include中接的参数是*组件名*，如不设置则默认保留所有的组件 -->
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
