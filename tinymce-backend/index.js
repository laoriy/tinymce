const koa = require("koa");

const app = new koa();

// 静态资源处理
app.use(require("koa-static")(__dirname + "/public"));

// 服务启动
app.listen(3000, () => {
  console.log("服务启动成功:http://localhost:3000");
});
