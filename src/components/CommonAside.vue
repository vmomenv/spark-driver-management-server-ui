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
    <h3>{{ isCollapse?'后台':'星火驱动管理后台' }}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template> 
  
  <style lang="less" scoped>  
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 1054px;

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
import Cookie from 'js-cookie'
    export default {
      data() {
        return {
          // menuData:[
          //   {
          //       path:"/",
          //       name:"home",
          //       label:"首页",
          //       icon:"s-home",
          //       url:"Home/home"
          //   }
          //   ,{
          //       path:"/file",
          //       name:"file",
          //       label:"文件管理",
          //       icon:"files",
          //       url:"File/file"
          //   }
          //   ,{
          //       path:"/user",
          //       name:"user",
          //       label:"用户管理",
          //       icon:"s-custom",
          //       url:"User/user"
          //   },{
          //     label:"其他",
          //     icon:"location",
          //     children:[
          //       {
          //         path:"/page1",
          //         name:"page1",
          //         label:"页面1",
          //         icon:"setting",
          //         url:"Other/PageOne"
          //       },
          //       {
          //         path:"/page2",
          //         name:"page2",
          //         label:"页面2",
          //         icon:"setting",
          //         url:"Other/PageTwo"
          //       }
          //     ]
          //     }
          //   ]

            
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //点击菜单跳转
        clickMenu(item){
          console.log(item)
          //当页面路由与item.path相同时，不跳转(y与跳转路由不一致时才允许跳转)
          if(this.$route.path!== item.path && !(this.$route.path ==='/home' && (item.path==='/home' || item.path==='/'))){
            this.$router.push(item.path)
          }
          this.$store.commit('selectMenu',item)
        }
        
      },
      //计算数据过滤，应对不同账号权限问题
      computed:{
        noChildren(){
          return this.menuData.filter(item=> !item.children)
        },
        hasChildren(){
          return this.menuData.filter(item=>item.children)
        },
        menuData(){
          //判断当前数据，如果缓存中没有，则从当前store中获取
          return JSON.parse(Cookie.get('menu'))||this.$store.state.tab.menu
         },        
        isCollapse(){
          return this.$store.state.tab.isCollapse
        }

      }


    }
  </script>
<style lang="less" scoped>
  .el-menu{
    border-right: none;
  }
</style>