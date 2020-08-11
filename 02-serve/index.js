//引入框架
let express = require("express");
//获得对象
var app = express();
//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//引入body-parser模块
let bodyParser = require("body-parser");
//创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

app.get("/home", function (req, res) {
  res.json({ title: "主页面", code: 1, msg: "提交成功" });
});
app.post("/login", urlencodedParser, function (req, res) {
  let { name, passwd } = req.body;
  console.log(req);
  console.log(name);
  res.json({ title: "登录页面", code: 1, msg: name + "提交成功" });
});

var server = app.listen(9999, () => {
  console.log("启动服务器");
});
