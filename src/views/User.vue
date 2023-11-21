<template>
    <div class="manage">
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%" :before-close="handleClose">
        <!-- 用户表单信息 -->
        <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="地址" prop="addr">
            <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
          </el-form-item>
        </el-form>



        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
      <div class="manage-header">
        <el-button @click="handleAdd" type="primary">
            + 新增
        </el-button> 
          <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="sexLabel"
                label="性别">
                <template slot-scope="scope">
                  <span>{{ scope.row.sex ==1 ? '男':'女'}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="age"
                label="年龄">
              </el-table-column>
              <el-table-column
                prop="birth"
                label="出生日期">
              </el-table-column>
              <el-table-column
                prop="addr"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="addr"
                label="地址">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
      </div>
    </div>
</template>
<script>
import {getUser,addUser,editUser} from '../api'
export default {
    data(){
        return{
            dialogVisible:false,
            form: {
              name:'',
              age:'',
              sex:'',
              birth:'',
              addr:''
            },
            rules:{
              name:[{ required: true, message: '请输入姓名'}],
              age:[{ required: true, message: '请输入年龄'}],
              sex:[{ required: true, message: '请输入性别'}],
              birth:[{ required: true, message: '请输入出生日期'}],
              addr:[{ required: true, message: '请输入地址'}]
            },
            tableData:[

            ],
            modelType:0 //0表示新增的弹窗，1表示编辑的弹窗 
              
        }
    },
    methods:{
      submit(){
        this.$refs.form.validate((valid)=>{
          console.log(valid,'valid')
          if(valid){
            //对表单进行处理
            if(modelType === 0){
                addUser(this.form),then(()=>{
                  //再次调用获取列表的接口以更新数据
                  this.getList()
                })
            }else{
                editUser(this.form),then(()=>{
                  //再次调用获取列表的接口以更新数据
                  this.getList()
                })
            }
            
            //表单数据
            console .log(this.form,"form")

            //重置表单
            this.$refs.form.resetFields()
            //关闭弹窗
            this.dialogVisible = false
          }
        })
      },
      handleClose(){
        //重置表单  
        console.log(this.$refs.form)
        this.$refs.form.resetFields()
        this.dialogVisible = false
      },
      cancel(){
        this.handleClose()
      },
      handleEdit(row){

      },
      handleDelete(row){

      },
      getList(){
          //获取的列表数据
          getUser().then(({data})=>{
            console.log(data)
            this.tableData=data.list
          })
      }
    },
    mounted(){
        this.getList()
    }
}
</script>

<!-- {
  model:'name',
  label:'姓名',
  type:'input'
},
{
  model:'age',
  label:'年龄',
  type:'input'
},
{
  model:'sex',
  label:'性别',
  type:'select',
  opts:[
      {
      label:'男',
      value:1
    },{
      label:'女',
      value:0
    }
  ]
},
{
  model:'birth',
  label:'出生日期',
  type:'date'
},
{
  model:'addr',
  label:'地址',
  type:'input'
} -->