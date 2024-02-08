const { converter } = require("./libraries/library");
const {numFormatter}= require("./libraries/formatNumbertoComma");
const{slugify}= require("./Modules/textParser");
const result = converter(5000);
console.log(result);
const result2= numFormatter(10000);
console.log(result2);
const result3 = slugify("hello i am saurav giri");
console.log(result3)