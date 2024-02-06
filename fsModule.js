//?fs module in node js
console.log("first");
const fs = require("node:fs");

const fileContent = fs.readFileSync("./hello.txt", "UTF-8");
console.log(fileContent);
console.log("second");
fs.readFile("./hello.txt", "UTF-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("third");

fs.writeFileSync("write.txt", "HelloWorld");

fs.writeFile("write.txt", " Hello saurav", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
