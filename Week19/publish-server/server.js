let http = require("http");
let https = require("https");
let unzipper = require("unzipper");
let queryString = require("queryString");
//auth路由 接受code 授权code+client_id+client_secret换取token
function auth(req, res) {
  let query = queryString.parse(req.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, function (info) {
    res.write(
      `<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`
    );
    res.end();
  });
}

function getToken(code, callback) {
  let request = https.request(
    {
      hostname: "github.com",
      path: `/login/oauth/access_token?code=${encodeURI(
        code
      )}&client_id=${encodeURI(
        "Iv1.734712df99c44be1"
      )}&client_secret=${encodeURI(
        "087f3e02a518e974756917d1fef395a8ab3f36c4 "
      )}`,
      port: 443,
      method: "POST",
    },
    function (res) {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk.toString();
      });
      res.on("end", (chunk) => {
        console.log(body);
        callback(queryString.parse(body));
      });
    }
  );

  request.end();
}
//publish路由 用token获取用户信息 检查权限 接收发布
function publish(req, res) {
  let query = queryString.parse(req.url.match(/^\/publish\?([\s\S]+)$/)[1]);
  getUser(query.token, (info) => {
    console.log(info);
    if (info.login === "haobaic") {
      req.pipe(unzipper.Extract({ path: "../server/public/" }));
      req.on("end", function(){
        res.end("Success!");
      })
     
    }
  });
}

function getUser(token, callback) {
  let request = https.request(
    {
      hostname: "api.github.com",
      path: `/user`,
      port: 443,
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "dewey-public",
      },
    },
    function (res) {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk.toString();
      });
      res.on("end", (chunk) => {
        console.log(body);
        callback(JSON.parse(body));
      });
    }
  );

  request.end();
}

http
  .createServer(function (req, res) {
    if (req.url.match(/^\/auth\?/)) {
      return auth(req, res);
    }
    if (req.url.match(/^\/publish\?/)) {
      return publish(req, res);
    }
  })
  .listen(8082);
