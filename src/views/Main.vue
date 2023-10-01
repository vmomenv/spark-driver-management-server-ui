<template>
    <div>
        <el-container>
            <common-aside/>
            <el-container>
              <el-header>Header</el-header>
              <el-main>
                <router-view></router-view>
              </el-main>
            </el-container>
          </el-container>
    </div>
</template>
<script>
import CommonAside from '@/components/CommonAside.vue';
export default {
    data(){
        return{}
    },
    components:{
        CommonAside
    }
}
</script>