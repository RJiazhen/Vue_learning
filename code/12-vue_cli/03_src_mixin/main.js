// Vue项目的入口文件

// 引入Vue
import Vue from 'vue';
// 引入App组键
import App from './App.vue';
// 引入混合文件
import { mixin1, mixin2 } from "./mixin.js";
// 关闭vue的生产提示
Vue.config.productionTip = false;
// 使用这种方法可以给所有vc和vm都混合这些内容
Vue.mixin(mixin1)
Vue.mixin(mixin2)

new Vue({
    // 完成将App组建放入容器中
    render: h => h(App),
}).$mount('#app');
