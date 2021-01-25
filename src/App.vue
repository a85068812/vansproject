<!--
 * @Descripttion: 开始文件
 * @version: 1.0.0
 * @Author: 王凯杰
 * @Date: 2021-01-18 20:49:21
 * @,@LastEditors: ,: sueRimn
 * @,@LastEditTime: ,: 2021-01-25 17:48:53
-->
<template>
  <div id="app">
    <combat-header></combat-header>
      <body class="project_body" >
          <router-view />
      </body>
      <div class="suspension" ></div>
    <combat-footer></combat-footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() { 
    return {

    }
  }
}
</script>

<style lang="less">
@import url("./assets/css/default.css");
@import url("./assets/css/color.css");
@import url("./assets/css/public.css");
@import url("./assets/css/wangEditor.css");
#app {
    font-family: Microsoft YaHei !important;
    //-ms-overflow-style: none;
    //scrollbar-width: none;
    min-width: 24rem;
    overflow: hidden;
}
ul,li{
  list-style: none;
  padding:0;
  margin:0;
}
</style>
