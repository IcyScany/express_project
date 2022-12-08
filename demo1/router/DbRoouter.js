const express  = require("express")
const path = require("path")
var router = express.Router()

// 导入模块
var sqlite3 = require("sqlite3").verbose()
// 指定数据库文件位置
var db = new sqlite3.Database(path.join(__dirname, "../db/test.sqlite3"))

router.post('/add', (req,res)=>{
  let json_body = req.body;
  let insert_sql = 'INSERT INTO `user` (`id`, `name`, `account`, `password`, `create_time`, `balance`) VALUES (?, ?, ?, ?, ?, ?);'
  db.run(insert_sql, [json_body.id, json_body.name, json_body.account, json_body.password, '2022', json_body.balance],(err, rows)=>{
    if(err == null){
      res.send("Successful")
    }else{
      res.send(err)
    }
  })
})

router.get('/testlist', (req, res)=>{
  db.all('select * from `user`;', [], (err, rows)=>{
    if(err == null){
      res.send(rows)
    }else{
      res.send(err)
    }
  })
})


module.exports= router