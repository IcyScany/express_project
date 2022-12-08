const express =  require("express")
const fs =  require("fs")
var router = express.Router()

//下载文件
router.get("/download", async (req, res) => {
  let file_name = req.query.file_name;
  let file_path = process.cwd() + "/public/upload/" + file_name;
  res.download(file_path);
})


router.post("/upload", (req, res) => {
  //检测是否有文件
  if (!req.files) {
    res.send({
      code: 400,
      msg: "上传文件不能为空",
    });
    return;
  }
  
  //保存文件
  let files = req.files;
  let ret_files = [];
  for (let file of files) {
    //获取名字后缀
    let file_ext = file.originalname.substring(file.originalname.lastIndexOf(".") + 1);
    //使用时间戳作为文件名字
    let file_name = new Date().getTime() + "." + file_ext;
    // 移动文件并且修改文件名字
    fs.renameSync(
      process.cwd() + "/public/upload/temp/" + file.filename,
      process.cwd() + "/public/upload/" + file_name
    );
    ret_files.push("/public/upload/" + file_name);
  }

  res.send({
    code: 200,
    msg: "ok",
    data: ret_files,
  });
    
}
)
module.exports = router