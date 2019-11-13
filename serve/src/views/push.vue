<template>
  <div  v-loading="loading">
    {{id}}
    <el-form class="header" label-position="right" label-width="80px" :model="formshop">
      <el-form-item label="商品名称">
        <el-input v-model="formshop.input" ></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="formshop.money"></el-input>
      </el-form-item>
      <el-form-item label="发货地">
        <el-input v-model="formshop.city"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="formshop.num"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        :action="$http.defaults.baseURL + '/uploads'"
        :on-success="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <vue-editor style=" margin-left: 80px; margin-top:20px" v-model="content"></vue-editor>
      <el-form-item class="button">
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import router from '../router/index'
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {}
  },
    components: {
    VueEditor
  },
  data() {
    return {
      loading :false,
      formshop: { input: "", money: "", city: "" ,num:""},
      content:null,
      fileList: [
      ]
    };
  },
  methods: {
      handleRemove(file) {
        let index =this.fileList.findIndex(item=>{return item.url ==file.url})
        this.fileList.splice(index,1)
        //window.console.log(this.fileList);
        
      },
      handlePreview(file) {
        //window.console.log(file);
        this.fileList.push({url:file.url,name:file.originalname})
      },
      onSubmit() {
        let data = [this.formshop,this.fileList,this.content]
        this.id? this.$http.put(`/push/${this.id}`,data):this.$http.post('/push',data)
       
        this.$message({
          message: '提交成功',
          type: 'success'
        });
        router.push('/shop/list')
      },
      async fetch(){
        const res = await this.$http.get(`/list/${this.id}`)
        this.formshop = res.data.formshop;
        this.content = res.data.fotitle;
        this.fileList = res.data.img
        this.loading = false;
        // window.console.log(res.data)
      }
    },
    created(){
      if(this.id){
        this.loading=true;
         this.fetch()
         

       }
    }
};
</script>
<style>
.header{
    max-width: 600px;
}
.upload-demo{
    margin-left: 80px;
    width: 200px
}
.button{
    margin-top: 20px;
}
</style>