/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer');
const config = require('../../../config/config');


const sendMail = async (email, subjectName, mailTemplateName, mailData) => {
  let transporter = nodemailer.createTransport({
    service:"gmail",
      auth: {
        user: config.mail.auth.user, // generated ethereal user
        pass: config.mail.auth.pass, // generated ethereal password
      },
    });  
   
   const data = await transporter.sendMail({
      from: config.mail.auth.user, // sender address
      to: email, // list of receivers
      subject: subjectName, // Subject line
      text: mailTemplateName, // plain text body
      html: mailData // html body
    },(err,info) => {
        if(err)
        {
          return err;
        }
    });
    return data;

};

module.exports = {
  sendMail
};
