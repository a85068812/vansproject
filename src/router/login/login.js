/*
 * @Descripttion: 登录注册路由管理
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-26 11:00:02
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-27 15:53:24
 */

export default [
    {
        path: '/vansLogin',
        name: '/vansLogin',
        keepAlive: true,
        meta: {
            title: '登录',
        },    
        component: () =>
            import('@/view/login/login.vue')
    },
    {
        path: '/vansRegister',
        name: '/vansRegister',
        keepAlive: true,
        meta: {
            title: '注册',
        },    
        component: () =>
            import('@/view/login/register.vue')
    }
]
