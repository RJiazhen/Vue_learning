// Vue项目的入口文件

// 引入Vue
import Vue from 'vue';
// 引入App组键
import App from './App.vue';
// 只引入element的Button和Select组件
import 'element-ui/lib/theme-chalk/index.css';

// 按需引入Element
import { Button, DatePicker, Row } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 关闭vue的生产提示
Vue.config.productionTip = false;

new Vue({
    // 完成将App组件放入容器中
    el: '#app',
    render: h => h(App),
    // 添加路由器
});
