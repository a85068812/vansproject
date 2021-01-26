<!--
 * @Descripttion: 公共底部
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 21:02:38
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-26 14:22:18
-->
<template>
    <div class="background_1c" id="footerMax">
        <div class="footer">
            <div class="foot_l fl">
                <p class="color-f fon-wei fon-12 margin-bottom-015">获取帮助</p>
                <div>
                    <div class="fl wid-40">
                        <span class="color-f fon-wei fon-21">购物</span>
                        <ul class="color-58">
                            <li>男子</li>
                            <li>女子</li>
                            <li>CUSTOMS</li>
                            <li>Vault by Vans</li>
                            <li>职业鞋款</li>
                            <li>查找店铺</li>
                        </ul>
                    </div>
                    <div class="fl wid-40">
                        <span class="color-f fon-wei fon-21">公司</span>
                        <ul class="color-58">
                            <li>客户服务</li>
                            <li>使用条款</li>
                            <li>隐私政策</li>
                            <li>可持续发展</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="foot_c fl margin-left-01">
                <p class="color-f fon-wei fon-12 margin-bottom-015">联系我们</p>
                <div>
                    <span class="color-f fon-wei fon-21">电子邮件</span>
                    <p class="p1">contactus@vans.com.cn</p>
                </div>
                <div>
                    <span class="color-f fon-wei fon-21">地址</span>  
                    <p class="p2">中国上海市南京西路688号8楼</p> 
                </div>
            </div>
            <div class="foot_r fl">
                 <p class="color-f fon-wei fon-12 margin-bottom-015">在这里找到我们</p>
                 <span class="color-f">罗庆杨是个臭虫</span>
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
#footerMax{
    width: 100%;
    height: 290px;
    // position: absolute;
    // bottom: 0;
    .footer{
        width: 1288px;
        max-width: 100%;
        margin: 0 auto;
        padding: 30px;
        position: relative;
        bottom: 0;
        height: 290px;
        .foot_l{
            width: 33.33%;
            min-height: 220px;
            margin: 25px 0 15px;
            border-right: 1px solid #919191;
            li{
                line-height: 25px;
            }
        }
        .foot_c{
            width: 33.33%;
            margin: 25px 0 15px 40px;
            min-height: 220px;
            border-right: 1px solid #919191;
            .p1{
                color: #589BC6;
                margin: 8px 0 25px 0;
            }
            .p2{
                color: #919191;
                margin-top: 8px;
            }
        }
        .foot_r{
            width: 30%;
            margin: 25px 0 15px 0px;
            min-height: 220px;
            text-align: center;
        }
    }
}
</style>