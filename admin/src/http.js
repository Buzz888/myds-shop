import axios from 'axios';
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
const http = axios.create({
    baseURL:'http://localhost:3000/admin'
})
http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {
        //非200错误
        //返回的res对象 alert(err.response.data.message)
        Notify({ type: 'warning', message: err.response.data.message });

        // if(err.response.status === 401){
        //     //前后端统一约定401跳转回登陆界面
        //     router.push('/')
        // }
        return Promise.reject(err)
    }
})
export default http