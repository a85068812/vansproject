<!--
 * @Descripttion: 公共头部
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 20:58:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-18 22:25:44
-->
<template>
    <div id="header">
        <div class="header_vans flex flex-bet">   
            <div class="header_left">
                <img src="../../assets/header/vans-logo.png" alt="">
            </div>
            <div class="header_right">
                <div class="header_right_top">
                    <p>
                        <i></i>
                        <span>我的购物车</span>
                    </p>
                    <p>
                        <i></i>
                        <span>登录</span>
                        <strong>/</strong>
                        <span>注册</span>
                    </p>
                </div>
                <div class="header_right_bpttom">
                    
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
#header{
    width: 100%;
    background: #ffffff;
    .header_vans{
        max-width: 1300px;
        height: 130px;
        margin: 0 auto;
        img{
            width: 160px;
            height: 80px;
        }
    }
}
</style>