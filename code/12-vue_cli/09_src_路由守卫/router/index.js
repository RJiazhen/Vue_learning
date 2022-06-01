// 该文件用于专门创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import Message from '../components/Message.vue';
import Detail from '../components/Detail.vue';

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { isAuth: false },
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { isAuth: false },

            children: [
                {
                    // 子路由不加/号
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true },
                    // 独享路由守卫
                    beforeEnter: (to, from, next) => {
                        console.log('触发news的独享路由守卫');
                    }

                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },

                    children: [
                        {
                            // 使用name参数添加路由的名称，并且在path中可以设置接收参数
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true },
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

// 全局路由守卫
// 全局beforeEach会在每次路由切换前调用
// to代表要去的路由，from代表当前的路由，next代表执行切换路由的动作
// router.beforeEach((to, from, next) => {
//     // 通过设置isAuth这个参数定义访问该路由是否需要验证
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'nextID') {
//             next();
//         }
//         else {
//             alert("无权限访问")
//         }

//     }
//     else {
//         next();
//     }
// });
// // 后置路由守卫，在路由跳转后调用
// router.afterEach((to, from) => {

// })



export default router;