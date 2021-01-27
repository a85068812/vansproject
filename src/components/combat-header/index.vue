<!--
 * @Descripttion: 公共头部
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 20:58:44
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-27 15:51:37
-->
<template>
    <div id="header" ref="pronbit">
        <div class="header_vans flex">   
            <div class="header_left flex flex-bet">
                <img src="../../assets/header/vans-logo.png" alt="">
            </div>
            <div class="header_right flex flex-col">
                <div class="header_right_top flex margin-top-1 clor_9b fon-wei" v-if="isLogin">
                    <p class="margin-right-2 cursor">
                        <i class="el-icon-shopping-cart-2 margin-right-05"></i>
                        <span>我的购物车</span>
                    </p>
                    <p class="margin-right-2 cursor">
                        <i class="el-icon-s-custom margin-right-05"></i>
                        <span @click="vansLogin()">登录</span>
                        <strong class="margin-left-right-05">/</strong>
                        <span>注册</span>
                    </p>
                </div>
                <div :class="style">
                    <img src="../../assets/header/vans-logo.png" alt="" v-if="isImg">
                    <div class="header_right_bpttom flex">
                        <ul v-for="(item,index) in nav" :key="index" class="flex flex-bet fon-21 cursor" @mouseover="changeActive(item.id)" @mouseleave="removeActive(item.id)">
                            <li class="margin-right-05 fon-wei rel" >{{item.title}}
                                <i class="sparent ab" v-if="isShow&&item.id == current"></i>
                            </li>
                            <i class="el-icon-arrow-down fon-04 fon-wei-impor"></i>
                            <div class="display_box ab z_index" v-if="isShow&&item.id == current">
                                <div class="background_00">         
                                    <div v-for="(theme,themeIndex) in item.datas" :key="themeIndex" class="color-f display_box_content" >      
                                        <span>{{theme.themeNew}}</span>
                                        <div v-for="(titleList,themeIndex) in theme.content" :key="themeIndex">
                                            <strong >
                                                {{titleList.titleListNew}}
                                            </strong>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav:[
                {
                    id:'1',
                    title:'关于VANS',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列1"},
                            {titleListNew:"豹纹图案定制系列2"}
                        ]}
                    ]
                },{
                    id:'2',
                    title:'热门',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列3"},
                            {titleListNew:"豹纹图案定制系列4"}
                        ]}
                    ]
                },{
                    id:'3',
                    title:'男子',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列5"},
                            {titleListNew:"豹纹图案定制系列6"}
                        ]}
                    ]
                },{
                    id:'4',
                    title:'女子',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列7"},
                            {titleListNew:"豹纹图案定制系列8"}
                        ]}
                    ]
                },{
                    id:'5',
                    title:'童鞋',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列8"},
                            {titleListNew:"豹纹图案定制系列9"}
                        ]}
                    ]
                },{
                    id:'6',
                    title:'滑板',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列10"},
                            {titleListNew:"豹纹图案定制系列11"}
                        ]}
                    ]
                },{
                    id:'7',
                    title:'CUSTOMS定制鞋',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列12"},
                            {titleListNew:"豹纹图案定制系列13"}
                        ]}
                    ]
                },{
                    id:'8',
                    title:'更多产品',
                    datas:[
                        {themeNew:'CLASSICS  经典款', content :[
                            {titleListNew:"豹纹图案定制系列14"},
                            {titleListNew:"豹纹图案定制系列15"}
                        ]}
                    ]
                },
            ],
            isShow:false,
            isLogin:true,
            current:0,
            scrollHeigh:0,
            style:'',
            isImg:false
        }
    },
    mounted(){
         window.addEventListener('scroll',this.handleScrollx,true)
    },
    methods: {
         /**
         * @description: 鼠标划入nav
         * @Version: 1.0.0
         * @param : itemid  {String} 数据下标
         * @return: {无}
         * @author: 王凯杰
         * @Date: 2021-01-25 16:27:41
         */
        changeActive(itemid){
            this.isShow = true;
            this.current = itemid;
        },
        /**
         * @description: 鼠标划出nav
         * @Version: 1.0.0
         * @param : itemid  {String} 数据下标
         * @return: {无}
         * @author: 王凯杰
         * @Date: 2021-01-25 16:27:41
         */
        removeActive(itemid){
            this.isShow = false;
            this.current = null;
        },
        /**
         * @description: 跳转到登录页面
         * @Version: 1.0.0
         * @param : {无}
         * @return: {无}
         * @author: 王凯杰
         * @Date: 2021-01-26 11:27:41
         */
        vansLogin(){
            this.$router.push('/vansLogin')
        },
        /**
         * @description: 监听滚动条
         * @Version: 1.0.0
         * @param : {无}
         * @return: {无}
         * @author: 王凯杰
         * @Date: 2021-01-26 20:54:41
         */
        handleScrollx(){
            console.log('距离顶部高度',this.$refs.pronbit.getBoundingClientRect().top)
            this.scrollHeigh = this.$refs.pronbit.getBoundingClientRect().top
            if(this.scrollHeigh <= -70){
                this.style = 'style'
                this.isImg = true
            }else{
                this.style = "" 
                this.isImg = false
            }
        }   
    }
}
</script>
<style lang="less" scoped>
// 滚动条到一定高度是触发的样式
.style{
    width:100%;
    position:fixed;
    top:0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: inherit;
    background-color: #fff;
    img{
        width: 100px !important;
        height: 50px !important;
        margin-top: 5px;
        margin-left: 25px;
    }
    .header_right_bpttom{    
        height:60px;
        max-width:1300px;
        .display_box{
            width: 100% !important;
            height: 100px;
            position: absolute;
            top: 60px !important;
            left: 0;
            .display_box_content{
                width: 1300px !important;
                max-width: 1300px !important;
                margin: 0 auto!important;
            }
        }
        .sparent{
            position: absolute;
            top: 15px !important;
        }
    }   
}
#header{
    width: 100%;
    // background: yellow;
    .header_vans{
        max-width: 1300px;
        height: 130px;
        margin: 0 auto;
        justify-content: space-between;
        img{
            width: 160px;
            height: 80px;
        }
        .header_right{
            justify-content: space-between;
            align-items: flex-end;
            .header_right_top{
                align-items: flex-end;
            }
            .header_right_bpttom{
                ul{
                    width: auto;
                    padding: 15px;
                }
                .display_box{
                    width: 100%;
                    height: 100px;
                    top: 130px;
                    left: 0;
                    .display_box_content{
                        width: 1300px;
                        max-width: 1300px;
                        height: 100px;
                        margin: 0 auto;
                    }
                }
                .sparent{
                    width: 0px;
                    height: 0px;
                    border: 1px solid transparent;
                    border-bottom-color: #000;
                    border-width: 12px 8px;
                    position: absolute;
                    top:11px;
                    left: 45%;
                }
            }
        }
    }
}
</style>