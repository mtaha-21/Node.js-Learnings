const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

const dbURI =
  "mongodb+srv://taha:test1234@nodetuts.zrpozqr.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .set("strictQuery", false)
  .connect(dbURI)
  .then((result) => app.listen(3000), console.log("connected to db"))
  .catch((err) => console.log(err));
//  register view engine
app.set("view engine", "ejs");

// listen for requests

// middleware
// app.use((req, res, next) => {
//   console.log("host", req.host);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the next middleware function");
//   next();
// });

// third party middleware
app.use(morgan("dev"));

// middleware & static files
app.use(express.static("public"));

//mongoose and mongo sandbox routes

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "My Second Blog",
    snippet: "Creating my Second blog",
    body: "more content to read from here ...",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all the data
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get a particular blog data
app.get("/single-blog", (req, res) => {
  Blog.findById("63da5bdd70a83f9da18fdfec")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// routes
app.get("/", (req, res) => {
  //   res.send("<p>Home page</p>");
  //   res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<p>About page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new page" });
});

// // redirects
// app.get("/aboutus", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.render("404"), { title: "404" };
});
