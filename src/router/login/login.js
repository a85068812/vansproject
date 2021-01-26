/*
 * @Descripttion: 登录注册路由管理
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-26 11:00:02
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-26 14:08:40
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
            import('@/view/login/index.vue')
    }
]
