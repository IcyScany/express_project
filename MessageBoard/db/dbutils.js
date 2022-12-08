var mysql = require('mysql');

// 此处使用createPool连接数据库，保证可以自动断开连接
var db = mysql.createPool({
    host: '43.139.171.246',
    user: 'root',
    password: 'scany0605',
    database: 'db',
    port: '3306'
});

db.getConnection(err => {
    if (err) throw err;
    console.log('mysql test  connected ')
});


module.exports = {db}   // 导出数据库
