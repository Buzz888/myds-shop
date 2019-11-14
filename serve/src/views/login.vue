<template>
  <el-table
    :data="tableData"
    style="width:700px;"
    height="100%">
    <el-table-column
      fixed
      prop="_id"
      label="用户id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="username"
      label="账户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="option"
      label="是否被禁用(0为没禁用)"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="add(scope.row._id)"
          type="text"
          size="small">
          解除禁用
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      async add(id){
        window.console.log(id)
        const res = await this.$http.post(`/change/${id}`)
        if(res){
         this.fetch()
        }
      },
      async fetch(){
        const res = await this.$http.get('/login')
        this.tableData = res.data
        //window.console.log(this.tableData)
      },
    },
    data() {
      return {
        tableData: []
      }
    },
      created(){
       this.fetch();
      
      }
  }
</script>