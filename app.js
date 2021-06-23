// Bulk message
// Analytics
// Template
// Automation
const express = require("express");
const { mailer } = require("./mailer");
const nodemailer = require("nodemailer");
const chromium = require("chrome-aws-lambda");
const app = express();

const toEmail = [
  "aayushsinha9@gmail.com",
  "mohammad.danish@springworks.in",
  "aayush.sinha@springworks.in",
];
// const data = "This is a sample test mail";

const transporter = nodemailer.createTransport({
  service: "Mandrill",
  host: "smtp.mandrillapp.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "abc", // generated ethereal user
    pass: "c1AEdDdPZOWZiFjCLcMTAQ"
  },
  debug: true,
  logger: true,
});

const data = {
  attachments: [],
  from: "alan@nachamu.com",
  to: toEmail,
  subject: "Testing mandrill and mailchimp",
  html: `    <html>
    <body>
      <div style="text-align: center;">
        <h3>I'd like your input!</h3>
      </div>
    </body>
  </html>
   `,
};

const sendMail = async () => {
  try {
    await transporter.sendMail({
      from: data.from, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      html: data.content,
      attachments: data.attachments,
    });

  } catch (e) {
    console.log("falied to send mail", e);
  }
};

sendMail()

// mailer(toEmail,data)

app.listen(1000, () => {
  console.log("server running on 1000");
});
