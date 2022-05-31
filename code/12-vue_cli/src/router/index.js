// 该文件用于专门创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import Message from '../components/Message.vue';
import Detail from '../components/Detail.vue';

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
                            // 使用name参数添加路由的名称，并且在path中可以设置接收参数
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法,只能传递固定的数据
                            // props: {a: 1,b: '这是一个props'}

                            // props的第二种写法，值为布尔值，为真时则可以把所有params以props的形式传递给Detail组件，但是不能传递query参数
                            // props: true

                            // props的第三种写法，值为函数
                            // 注意，这里还使用了结构复用的连续写法，不需要声明id和title分别为什么
                            props({ query: { id, title } }) {
                                return { id, title };
                            }
                        }
                    ]
                }

            ]
        },
    ]
});