/*
 * @Descripttion: 路由设置
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-26 11:01:03
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-26 14:37:08
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})


// router.beforeEach((to, from, next) => {
//     if (to.name !== null) {
//         next()
//     }else{
//         next({
//             name:"/"
//         })
//     }
// })
/*
 *  router.afterEach是vue全局的导航钩子函数，我个人的理解是，进入某个路由之后触发的钩子函数，我用的比较多的有两种用法
 *  1.修改 每个页面的title 
 *  首先在路由元中meta添加一个title属性，然后 用 document.title=to.meta.title修改当前也买你的title
 *  2.每次切换页面的时候，让页面滚动到最顶部 
 */
router.afterEach(() => {
    window.scrollTo(0, 0)

})
export default router