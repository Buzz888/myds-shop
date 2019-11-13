module.exports=app=>{
    const express = require('express')
    const list = require('../module/list')
    const router = express.Router({
        mergeParams: true //合并参数让路由里面能查找到req.params.resouce
    })
    router.get('/list', async (req, res) => {
        const mondel = await list.find()
        res.send(mondel)
    })
    router.get('/list/:id', async (req, res) => {
        // console.log(req.params)
        const mondel = await list.findById(req.params.id)
        res.send(mondel)
    })
    router.post('/fahuo', async (req, res) => {
        // console.log(req.params)
        const mondel = req.body
       console.log(req.body)
        const ok ={success:true}
        res.send(ok)
    })
    app.use('/admin',router)
}