module.exports = app => {
    const express = require('express')
    const list = require('../module/list')
    const buy = require('../module/buy')
    const login = require('../module/login')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    app.set('secret', 'afowjrojo2$%353')
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
        await buy.create({ item: req.body[0], data: new Date(),user:req.body[1] ,dizhi:req.body[2]})
        const ok = { success: true }
        res.send(ok)
    })
    router.post('/regsin', async (req, res) => {
        const data = await login.find({
            username: req.body.username
        })
        if (data==![]) {
            await login.create({
                username: req.body.username,
                password: req.body.userpassword,
                option: false,
                name: req.body.uname
            })
            const ok = { success: true }
            res.send(ok)
        }else{
            res.status(422).send({
                message:'用户存在了哦，换个名字'
            })
        }

    })
    router.post('/login',async(req,res)=>{
        const username = await login.findOne({
            username:req.body.username
        }).select('+password')
        if(!username){
            res.status(422).send({
                message:'用户不存在'
            })
        }else{
            // console.log(req.body.userpassword)
            // console.log(username.password)
            const isVal = require('bcrypt').compareSync(req.body.userpassword,username.password)
            if(!isVal){
                res.status(422).send({
                    message:'密码错误'
                })
            }else{
                const token = jwt.sign({
                    id: username._id, //在签名加入数据库数据 
                }, app.get('secret'))//签名 1
                res.send({token})
            }
        }
     
    })
    router.post('/token',async(req,res)=>{
        let token = req.body.token
        const {id}= jwt.verify(token,app.get('secret'))
        assert(id,401,'id不存在')
        req.user = await login.findById(id)
        console.log(req.user)
         res.send(req.user)
     })
     router.post('/stop',async(req,res)=>{
         
         const model = await login.findByIdAndUpdate(req.body._id,{option:1})
         res.send(model)
     })
     router.post('/option',async(req,res)=>{
         let {id,option}=req.body
         console.log(id,option)
         const model = await list.findByIdAndUpdate(id,{option:option})
         res.send(model)
     })
    app.use('/admin', router)
}