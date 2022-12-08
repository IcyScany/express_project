const express = require('express')  // 引入express
const app = express()               // 实例化express
const path = require('path')        // 引入路径
const port = 8080                   // 定义端口

app.use(express.json())

// 设置跨域请求，使前端可以调用服务端
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET, OPTION");
  if (req.method == 'OPTIONS');
  else next();
})

app.use(express.static(path.join(__dirname, './public')))   // 静态文件
app.use('/message', require('./router/MessageBoard'))       // 引入留言板路由

app.get('/', (req, res)=>{
  res.send('successful')
})


// 监听端口
app.listen(port, ()=>{
  console.log(`listening on port: ${port}...`)
})


