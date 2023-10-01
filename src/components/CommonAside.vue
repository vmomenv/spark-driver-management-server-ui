<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">控制台</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">审核</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template> 
  
  <style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  </style>
  
  <script>
    export default {
      data() {
        return {
          isCollapse: false,
          MenuData:[
            {
                path:"/",
                name:"home",
                icon:"s-home",
                url:"Home/home"
            }
          ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      //计算数据过滤，应对不同账号权限问题
      computed:{
        
      }


    }
  </script>