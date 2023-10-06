import nodemailer from 'nodemailer';

export const createHTMLTamplate = ({ name, email, message }) => {
  return `<div>
          <h2>Hi Shamxeed,</h2> 

          <h3>You have a new message, see the details below:</h3> 
          
          <li>Sender Name: ${name}</li>
          <li>Sender Email: ${email}</li>
          <li>Message:</li>

          <p>
            ${message}
          </p>

          <p>
            Thanks, <br>
            By Saukie Pay
          </p>
      </div>  
  `;
};

const user = process.env.NODE_MAILER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass },
});

export const sendMailAsync = async (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
        reject(false); // or use rejcet(false) but then you will have to handle errors
      } else {
        console.log('Email sent: ' + info.response);
        resolve(true);
      }
    });
  });
};
