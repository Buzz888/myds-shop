module.exports = app => {
    const express = require('express')
    const list = require('../module/list')
    const router = express.Router({
        mergeParams: true //合并参数让路由里面能查找到req.params.resouce
    })
    router.post('/push', async (req, res) => {
        await list.create({
            formshop: req.body[0],
            img: req.body[1],
            fotitle: req.body[2],
            option:0
        })
        res.send(res.data)
    })
    router.get('/list', async (req, res) => {
        const mondel = await list.find()
        res.send(mondel)
    })
    router.delete('/:id', async (req, res) => {

        await list.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })
    router.get('/list/:id', async (req, res) => {

        const model = await list.findById(req.params.id)
        res.send(model)

    })
    router.put('/push/:id', async (req, res) => {

        const model = await list.findByIdAndUpdate(req.params.id, {
            formshop: req.body[0],
            img: req.body[1],
            fotitle: req.body[2]
        })
        res.send(model)
    })
    
    
    app.use('/api', router)
    var multer  = require('multer')
    const upload = multer({dest:__dirname + '/../../server/uploads'})
    app.post('/api/uploads',upload.single('file'),(req,res)=>{
        
        const file =req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

}