<template>
    <div class="head-container">
        <div class="l-content">
            <el-button style="margin-right:20px"  @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>

              </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/logo.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
        </div>
    </div>
</template>
<script>
import { CollapseItem } from 'element-ui';
import{mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
    data(){
        return{}
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        handleClick(command){
            if(command==='logout'){
                //清除cookie中的token和menu
                Cookie.remove('token')
                Cookie.remove('menu')
                //跳转到登录页面
                this.$message.success('退出成功')
                this.$router.push('/login')
            }

        }
    },
    computed:{
        ...mapState({
            tags:state=> state.tab.tabsList
        })
    },
    mounted(){
        console.log(this.tags,'tags')  
    }
}
</script>
<style lang="less" scoped>
.head-container{
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .text{
        color:#fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius:50%;
        }
    }
    .l-content{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item{
            .el-breadcrumb__inner{
                font-weight: normal;
                &.is-link{
                    color:#666
                }
            }
            &:last-child{
                .el-breadcrumb__inner{
                    color:#fff;
                }
            }
        }
    }
    
}

</style>
