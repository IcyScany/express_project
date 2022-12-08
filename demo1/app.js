const { request } = require('express')
const express = require('express')
const multer = require('multer')
const app = express()
const port = 3000


app.use(express.json())

const upload = multer({
  dest: "./public/upload/temp",
});
//所有接口都允许有上传功能
app.use(upload.any());


app.use('/db', require('./router/DbRoouter'))

app.use("/test", require("./router/TestRouter"))


app.listen(port, ()=>{
  console.log('listening...')
})
