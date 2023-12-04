<template>
    <el-row>
        <el-col :span="8" style="padding-right:10px">
            <el-card class="box-card" >
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
        <el-col :span="16" style="padding-left:10px">
            <div class="num"> 
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class="number">{{ item.value }}项  </p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:100px">
              <p>{{dailyInfo.dailyInfo}}</p>
            </el-card>
            <el-card style="height:280px ;margin-top:20px">
              <!-- 折线图 -->
              <div ref="echarts1" style="height:280px">
              </div>
            </el-card>
            <div class="graph">
              <el-card style="height:260px">
                <div ref="echarts2" style="height:260px"></div>
              </el-card>
              <el-card style="height:260px">
                <div ref="echarts3" style="height:240px"></div>
              </el-card>
            </div>
        </el-col>
      </el-row>
</template>
<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
    data(){
        return{
          dailyInfo:{
            dailyInfo:'今天没消息哦'
          },    
            tableData: [],
          tableLabel:{
            uploadDate: '上传日期',
            packageName: '包名',
            packageStatus: '状态'
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
          ],
        }
    },
    //取数据
    mounted() {
      getData().then(({data})=>{
        const  {tableData}=data.data
        console.log(data.data)
        this.tableData=tableData
        //基于准备好的dom,初始化echarts实例
        const echarts1=echarts.init(this.$refs.echarts1)
        // 指定图表的配置项和数据
        var echarts1Option={}
        //处理数据xAxis
        const {orderData,userData,typeData}=data.data
        const xAxis = Object.keys(orderData.data[0])
        const xAxisData={
          data:xAxis
        }
        echarts1Option.xAxis=xAxisData
        echarts1Option.yAxis={}
        echarts1Option.legend=xAxisData
        echarts1Option.series=[]
        xAxis.forEach(key=>{
          echarts1Option.series.push({
            name:key,
            data:orderData.data.map(item =>item[key]),
            type:'line',
          })
        })

        console.log(echarts1Option)
        // 使用刚指定的配置项和数据显示图表。
        echarts1.setOption(echarts1Option)

//柱状图  
const echarts2 = echarts.init(this.$refs.echarts2);  
const echarts2Option = {  
          legend:{  
            textStyle:{  
              color:"#333",  
            },  
          },  
          grid:{  
            left:"20%",  
          },  
          //提示框  
          tooltip:{  
            trigger:"axis",  
          },  
          xAxis:{  
            type:"category",  
            data:userData.map(item => item.date),  
            axisLine:{  
              linestyle:{  
                color:"#17b3a3",  
              },  
            },  
            axisLabel:{  
              interval:0,  
              color:"#333",  
            },  
          },  
          yAxis:[  
            {  
              type:"value",  
              axisLine:{  
                linestyle:{  
                  color:"#17b3a3",  
                },  
              },  

            },  
          ],  
          color:["#2ec7c9","#b6a2de"],  
          series:[  
            {  
              name:'新增用户',  
              data:userData.map(item =>item.new),  
              type:'bar'  
            },  
            {  
              name:'活跃用户',  
              data:userData.map(item =>item.active),  
              type:'bar'  
            }  
          ]   
        }   
        echarts2.setOption(echarts2Option);
        //饼状图
        const echarts3=echarts.init(this.$refs.echarts3)
        const echarts3Option={
          tooltip:{
            trigger:"item",
          },
          color:[
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series:[{
            data:typeData,
            type:'pie'
          }],
        }
        echarts3.setOption(echarts3Option)
      })
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
.graph{
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    .el-card{
      width:48%;
    }
}
</style>
