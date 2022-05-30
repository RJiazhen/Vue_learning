// 该文件用于专门创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import Message from '../components/Message.vue';
import Detail from '../components/Detail.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    // 子路由不加/号
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                        }
                    ]
                }

            ]
        },
    ]
});