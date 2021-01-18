/*
 * @Descripttion: 公共组件管理
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 21:05:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-18 21:41:12
 */
import Vue from 'vue'
import CombatHeader from '@/components/combat-header/index.vue'
import CombatFooter from '@/components/combat-footer/index.vue'

const components = {
    CombatHeader,
    CombatFooter
}

const vans = {
    ...components
}

function install() {
    if (install.installed) {
        return
    }
    Object.keys(vans).forEach(key => {
        Vue.component(key, vans[key]);
    });
}

export default install