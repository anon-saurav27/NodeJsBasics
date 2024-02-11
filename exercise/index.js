// write a node module to send an email (nodemailer)
const {mailer} = require("./mailer")
const sendMail=async(email,sub)=>{
        return mailer(email,sub)
};
sendMail("anondon27@gmail.com","Happy Happy").then((res)=>{
    console.log(res);
});






//write a node module to encrypt thee password (bcryptjs)
//write a node module to create a pdf (pdfkit)
//write a node module to convert currency
//from one to another (currency-converter-lt)
