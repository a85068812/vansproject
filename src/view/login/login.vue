<!--
 * @Descripttion: 登陆注册页面
 * @version: 王凯杰
 * @Author: sueRimn
 * @Date: 2021-01-25 21:41:50
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-27 16:56:52
-->
<template>
    <div class="login register">
        <div class="vans_login background_f1">
            <div class="login_box background_ff">
                <p class="login_title color_c9 fon-wei">用户名登录</p>
                <el-form :model="loginForm" ref="ruleForm" class="vans_loginForm">
                    <el-form-item prop="phoneNumber">
                        <el-input v-model="loginForm.phoneNumber" placeholder="手机号/用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" placeholder="登录密码"></el-input>
                    </el-form-item>
                    <p class="forget_password clor_d2 cursor">忘记密码?</p>
                    <el-form-item class="login_button">
                        <el-button type="primary" @click="submitForm('ruleForm')" class="first_button">立即登录</el-button>
                        <el-button @click="toRegister()" class="second_button">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm:{
                phoneNumber:'',
                password:''
            }
        }
    },
    methods: {
        toRegister(){
            this.$router.push('/vansRegister')
        }
    }
}
</script>
<style lang="less">
@import url(./login.less);
</style>