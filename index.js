// const { converter } = require("./libraries/library");
// const {numFormatter}= require("./libraries/formatNumbertoComma");
// const{slugify}= require("./Modules/textParser");
// const result = converter(5000);
// console.log(result);
// const result2= numFormatter(10000);
// console.log(result2);
// const result3 = slugify("hello i am saurav giri");
// console.log(result3)
// //?proper case
// const toProperUpper = require("proper-upper-case");
// let result = toProperUpper("Hello how are you?");
// console.log(result);

// //?slugify
// const slugify = require("slugify");
// result = slugify("Hello how are you?");
// console.log(result);

// //?email validator

// const validator = require("email-validator");
// result = validator.validate("sauravgiri@gmail.com");
// console.log(result);

// //?description
// const truncate = require("../node_modules/lodash/truncate");
// result = truncate("Hello how are you kjsdh dskjhfkjshf dkjfshdskjhf dshfkjdshfkjhdsf sdhfkdsjhf");
// console.log(result)

// 1. generate QR-Code for the url on the terminal using package: qrcode
// 2. Write a nodejs application to convert the currency from one currency to another using package: currency-converter-it
// 3. write a node js application that can generate pdf using text and images use package : pdfkit
// const CC = require('currency-converter-lt')
// const QRCode = require("qrcode");

// QRCode.toString("youtube.com", { type: "terminal" }, function (err, url) {
//   console.log(url);
// });

// const Code = require('qrcode')

// Code.toDataURL('youtube.com', function (err, url) {
//   console.log(url)
// })

// let currencyConverter = new CC({from:"USD", to:"INR", amount:100, isDecimalComma:true})
// currencyConverter.from("USD").to("INR").amount(100).convert(0).then((response) => {
//   console.log(response) //or do something else
// })

// const Converter = require('currency-converter-lt');

// // Initialize the converter
// const converter = new Converter();

// // Define the amount and currencies
// const amount = 100; // Amount to convert
// const fromCurrency = 'USD'; // Currency to convert from
// const toCurrency = 'EUR'; // Currency to convert to

// // Convert currency
// converter.convert(amount, fromCurrency, toCurrency)
//     .then(result => {
//         console.log(`${amount} ${fromCurrency} is ${result} ${toCurrency}`);
//     })
//     .catch(error => {
//         console.error('Error converting currency:', error);
//     });

const PDFDocument = require("pdfkit");
const fs = require("fs");

// Create a new PDF document
const doc = new PDFDocument();

// Pipe the PDF to a writable stream
const outputStream = fs.createWriteStream("output.pdf");

// Pipe the PDF document to the writable stream
doc.pipe(outputStream);

// Add content to the PDF
doc.fontSize(20).text("Hello, World!", 100, 100);

// Finalize the PDF
doc.end();

// Close the output stream after the PDF is generated
outputStream.on("finish", () => {
  console.log("PDF created successfully");
});

// Handle errors
outputStream.on("error", (error) => {
  console.error("Error creating PDF:", error);
});
