//require nodemailer
//create transport object
//transport sendMail feature call


const nodemailer = require("nodemailer");
const transporter= nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "",
          pass: "",
        },
      }
);


const mailer=async(email, subject)=>{
   const info=await transporter.sendMail(
        {
            from: '"ANoN Don" <anondon27@gmail.com>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
             // plain text body
            html: "<b>Hello How r u ?</b>", // html body
          }
    );
    return info.messageId;
};

module.exports= { mailer };