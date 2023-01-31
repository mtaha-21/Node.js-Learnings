const fs = require("fs");

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile("./docs/blog1.txt", "Hello Guys. Im Taha", () => {
//   console.log("file was successfully written");
// });
// fs.writeFile("./docs/blog2.txt", "Hello Guys. This is a new blog page.", () => {
//   console.log("file was successfully written");
// });

// directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was successfully created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was successfully deleted");
//   });
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file was successfully deleted");
  });
}
