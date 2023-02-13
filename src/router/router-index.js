import VueRouter from 'vue-router'
//引入组件
const MainIndex=()=>import('../view/MainIndex.vue')
const MianMonitor=()=>import('../view/MianMonitor.vue')
const MainMaterialManagement=()=>import('../view/MainMaterialManagement.vue')

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: MainIndex
        },
        {
            path: '/MianMonitor',
            component: MianMonitor
        },
        {
            path: '/MainMaterialManagement',
            component: MainMaterialManagement
        },
        // {
        //     path: '/home',
        //     components: Home
        // }
    ]
})