<template>
  <div class="slide">
    <div class="logo">Graph</div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
     <el-menu-item index="1" @click="$router.push('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图谱场景管理</span>
        </template>
         <el-menu-item index="2-1" @click="$router.push('/graph/list')">列表</el-menu-item>
         <el-menu-item index="2-2" @click="$router.push('/graph/edit')">新增</el-menu-item>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>机器人管理</span>
        </template>
         <el-menu-item index="3-1" @click="$router.push('/robot/list')">列表</el-menu-item>
         <el-menu-item index="3-2" @click="$router.push('/robot/detail')">新增</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据管理</span>
        </template>
         <el-menu-item index="4-1" @click="$router.push('/data/observe')">数据监控</el-menu-item>
         <el-menu-item index="4-2" @click="$router.push('/data/import')">数据导入</el-menu-item>
         <el-menu-item index="4-3" @click="$router.push('/data/export')">数据导出</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>服务管理</span>
        </template>
         <el-menu-item index="5-1" @click="$router.push('/service/reptileService')">爬虫服务监控</el-menu-item>
         <el-menu-item index="5-2" @click="$router.push('/service/thirdService')">第三方服务监控</el-menu-item>
         <el-menu-item index="5-3" @click="$router.push('/service/edit')">新增服务</el-menu-item>
      </el-submenu>
     
      
      <el-menu-item index="99">
        <i class="el-icon-setting"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.slide{
  height: 100%;
  overflow: auto;
  background: #545c64;
}
.logo{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:cadetblue;
  font-size: 30px;
  border-bottom: #e0e0e0;
}
</style>
