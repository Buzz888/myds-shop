<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="data"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="user.name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="item[0].id.formshop.input"
      label="商品信息"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user.username"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="dizhi"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="item[0].option"
      label="商品数量"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细</el-button>
        <el-button type="text" size="small">发货</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        window.console.log(row);
      },
      async fetch(){
          const res = await this.$http.get('/fahuo')
          this.tableData =res.data
          window.console.log(this.tableData)
      }
    },

    data() {
      return {
        tableData: []
      }
    },
    created(){
        this.fetch()
    }
  }
</script>
