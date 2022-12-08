const express = require('express')
const {db} = require('../db/dbutils')

// var mysql = require('mysql');

var router = express.Router()


// let findUser = 'SELECT * FROM `message`'

// function doSQL(sql) {
//     db.query(sql, function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results, fields);
//     });
// }
// doSQL(findUser)


// 获取数据库数据
// router.get('/list', (req, res)=>{
//   doSQL(findUser)
// })


// 获取数据库数据
router.get('/list', (req, res)=>{
  db.query('select * from `message`', [], (err, rows)=>{
    if(err == null){
      res.send(rows)
    }else{
      res.send(err)
    }
  })
})

router.get('/test', (req, res)=>{
  db.query('select * from `message`', [], (err, rows)=>{
    if(err == null){
      res.send(rows)
    }else{
      res.send(err)
    }
  })
})

// 添加数据
router.post('/add', (req, res)=>{
  let message = req.body
  db.query('INSERT INTO `message` (`id`, `title`, `content`, `create_time`) VALUES(?, ?, ?, ?)', [new Date().getTime(), message.title, message.content, new Date().getTime()], (err, rows)=>{
    if(err == null){
      res.send({
        code:200,
        message:'success'
      })
    }else{
      res.send({
        code:500,
        message:"faliure",
        err
      })
    }
  })
})


// 删除数据
router.delete('/delete', (req, res)=>{
  const id = req.query.id
  db.query('delete from `message` where `id` = ?', [id], (err, rows)=>{
    if(err == null){
      res.send({
        code:200,
        message: "delete successfully"
      })
    }else{
      res.send({
        code:500,
        message: "delete faliure"
      })
    }
  })
})


// 导出路由
module.exports = router