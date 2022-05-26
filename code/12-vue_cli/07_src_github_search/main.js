// Vue项目的入口文件

// 引入Vue
import Vue from 'vue';
// 引入App组键
import App from './App.vue';
// 关闭vue的生产提示
Vue.config.productionTip = false;
new Vue({
    // 完成将App组件放入容器中
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
})
