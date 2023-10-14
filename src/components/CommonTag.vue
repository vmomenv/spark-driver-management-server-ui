<template>
    <div class="tabs">
        <el-tag
        v-for="(item,index) in tags"
        :key="item.path"
        :closable="item.name!=='home'"
        :effect="$route.name === item.name ? 'dark' :'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)">
        

        {{ item.label }}
      </el-tag>
    </div>
</template>
<script>
import { mapState ,mapMutations} from 'vuex'
export default{
    name:"CommonTag",
    data(){
        return {} 
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
    })
    },
    methods:{
        ...mapMutations(['closeTag']),
        //点击tag跳转的功能
        changeMenu(item){
            this.$router.push({name:item.name})
        },
        handleClose(item,index){
            //调用store中的mutation
            this.closeTag(item)
            //点击tag删除
            const length = this.tags.length-1

        }
    }
}


</script>