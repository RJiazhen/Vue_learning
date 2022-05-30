// Vue项目的入口文件

// 引入Vue
import Vue from 'vue';
// 引入App组键
import App from './App.vue';
// 引入vue.resource组件
import VueRouter from 'vue-router';
// 引入路由器
import router from './router';
// 关闭vue的生产提示
Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
    // 完成将App组件放入容器中
    el: '#app',
    render: h => h(App),
    // 添加路由器
    router: router,
});
