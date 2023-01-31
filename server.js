const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header cotent type
  //   res.setHeader("Content-Type", "text/html");
  //   res.write('<head><link rel="stylesheet" href="#"></head>');
  //   res.write("<h1>Hellooooooo meee</h1>");
  //   res.write("<p>hello</p>");
  //   res.end();

  //   Basic routing, status code and redirect
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      //   success
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      //   success
      res.statusCode = 200;
      break;
    case "/about-blahh":
      // resources being moved to another location- 301 so it will redirect to another location
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      //   error status - 404
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
