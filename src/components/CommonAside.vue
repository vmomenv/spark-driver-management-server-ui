<template>

  <el-menu default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <h3>星火驱动管理后台</h3>
    <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template> 
  
  <style lang="less" scoped>  
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;

    }
    .el-menu{
      height: 100vh;
      h3{
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;    
      }
    }
  </style>
  
  <script>
import { Submenu } from 'element-ui';

    export default {
      data() {
        return {
          isCollapse: false,
          menuData:[
            {
                path:"/",
                name:"home",
                label:"首页",
                icon:"s-home",
                url:"Home/home"
            },{
                path:"/user",
                name:"user",
                label:"用户管理",
                icon:"s-custom",
                url:"User/user"
            },{
                path:"/role",
                name:"role",
                label:"角色管理",
                icon:"s-data",
                url:"Role/role"
            },{
                path:"/menu",
                name:"menu",
                label:"菜单管理",
                icon:"s-grid",
                url:"Menu/menu"
            }
            ,{
              label:"其他",
              icon:"location",
              children:[
                {
                  path:"/page1",
                  name:"page1",
                  label:"页面1",
                  icon:"setting",
                  url:"Other/PageOne"
                }
              ]
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
        noChildren(){
          return this.menuData.filter(item=> !item.children)
        },
        hasChildren(){
          return this.menuData.filter(item=>item.children)
        }
      }


    }
  </script>