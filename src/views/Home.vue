<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/logo.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p class="">上次登录时间：<span>2023/10/1</span></p>
                    <p class="">上次登录地点：<span>西安</span></p>
                </div>
              </el-card>
              <el-card style="margin-top:20px;height:460px;">
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val"/>
              </el-table>
              </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num"> 
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class="number">{{ item.value }}项  </p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
      </el-row>
</template>
<script>
export default {
    data(){
        return{
            tableData: [{
            uploaddate: '2023-05-02',
            packagename: 'chaoxin_1.8.3_amd64.deb',
            packagestatus: '已驳回'
          }, {
            uploaddate: '2023-05-04',
            packagename: 'com.huaweicloud.welink.spark',
            packagestatus: '已上架'
          }, {
            uploaddate: '2023-05-01',
            packagename: 'com.lhmeeting.client',
            packagestatus: '已驳回'
          }],
          tableLabel:{
            uploaddate: '上传日期',
            packagename: '包名',
            packagestatus: '状态'
          },countData:[
            {
              name:'今日已上架',
              value:100,
              icon: 'success',
              color: '#67c23a',
            },{
              name:'今日已驳回',
              value:100,
              icon: 'error',
              color: '#f56c6c',
            },{
              name:'今日待审核',
              value:100,
              icon: 'warning',
              color: '#e6a23c',
            },{
              name:'本月上架',
              value:100,
              icon: 'success',
              color: '#67c23a',
            },{
              name:'本月驳回',
              value:100,
              icon: 'error',
              color: '#f56c6c',
            },{
              name:'本月待审核',
              value:100,
              icon: 'warning',
              color: '#e6a23c',
            }
          ]

        
      
        }
    }
}
</script>
<style lang="less" scoped>
.user{
    padding-bottom:20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    img{
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .userinfo{
        .name{
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access{
            color: #999999;
        }
    }
}
.login-info{
    p{
        line-height: 28px;
        font-size: 14px;
        color: #999999;
        span{
            color:#666666;
            margin-left: 60px;
        }
    }
}
.num{
    display: flex;
    flex-wrap: wrap;//内容超出则自动换行
    justify-content :space-between ;
    .icon{
        width:80px;
        height: 80px;
        font-size:30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }   
    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;//主轴上下显示
        justify-content: center;//垂直居中  
        .number{
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 3opx;
            

        }
        .desc{
            color:#999999;
            font-size: 14px;
            text-align: center;
        }
    }
    .el-card{
        width:32%;
        margin-bottom: 20px;
    }
}
</style>
