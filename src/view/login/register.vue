<!--
 * @Descripttion: 注册页面;
 * @version: 1.0.0;
 * @Author: 王凯杰;
 * @Date: 2021-01-26 18:39:57;
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-28 19:14:33
 -->
<template>
    <div class="login register">
        <div class="vans_login background_f1">
            <div class="login_box background_ff">
                <p class="login_title color_c9 fon-wei">用户注册</p>
                <el-form :model="registerForm" ref="ruleForm" class="vans_loginForm">
                    <el-form-item prop="phoneNumber">
                        <el-input v-model="registerForm.phoneNumber" placeholder="请输入账户/手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="registerForm.password" placeholder="请输入密码（8-20位）数字、字符和符号组合"></el-input>
                    </el-form-item>
                    <el-form-item prop="againPassword">
                        <el-input v-model="registerForm.againPassword" placeholder="请再次输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="verificationCode" class="verificationCode">
                        <el-input v-model="registerForm.verificationCode" placeholder="请输入验证码"></el-input>
                        <el-button type="primary" @click="NowVerification" class="verification_button">发送验证码</el-button>
                    </el-form-item>
                    <el-form-item class="login_button register_button">
                        <el-button type="primary" @click="submitForm('ruleForm')" class="first_button">立即注册</el-button>
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
            registerForm:{
                phoneNumber:'',
                password:'',
                againPassword:'',
                verificationCode:''
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
.register{
    .register_button{
        .first_button{
            width: 447px !important;
        }
    }
    .verificationCode{
        .el-form-item__content{
            display: flex;
            align-items: center;
            .el-input{
                width: 250px !important;
            }
            .verification_button{
                width: 175px;
                height: 50px;
                line-height: 50px;
                border: 0;
                padding: 0;
                text-align: center;
                font-size: 16px;
                background: #000;
                margin-left: 20px;
                border-radius: 0;
            }
        }
    }
}
</style>