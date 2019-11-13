<template>
  <div v-loading="loading">
    <el-table
      :data="formshop.filter(data => !search || data.formshop.input.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="商品名称" prop="formshop.input"></el-table-column>
      <el-table-column label="商品价格" prop="formshop.money"></el-table-column>
      <el-table-column label="发货地" prop="formshop.city"></el-table-column>
      <el-table-column label="用户浏览量" prop="option"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input :data-name="scope" v-model="search" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import router from '../router';
export default {
  data() {
    return {
      search: "",
      loading: true,
      formshop: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/list");

      this.formshop = res.data;

      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    async handleEdit(index, row) {
     router.push(`/shop/push/${row._id}`)
    },
    async handleDelete(index, row) {
        const res = await this.$http.delete(`/${row._id}`)
        this.$message({
          showClose: res,
          message: '删除成功',
          type: 'success'
        });
        this.fetch()

    }
  },
  created() {
    this.fetch();
  }
};
</script>