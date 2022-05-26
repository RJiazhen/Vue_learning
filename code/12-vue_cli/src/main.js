// Vue项目的入口文件

// 引入Vue
import Vue from 'vue';
// 引入App组键
import App from './App.vue';
// 引入vue.resource组件
import resource from "vue-resource";
import Vuex from 'vuex';
// 关闭vue的生产提示
Vue.config.productionTip = false;
Vue.use(resource);
Vue.use(Vuex);
new Vue({
    // 完成将App组件放入容器中
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
});
