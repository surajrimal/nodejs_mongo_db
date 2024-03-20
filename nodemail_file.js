var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abc12350@gmail.com',
        pass: '';
    }
});

var mailOptions = {
    form: 'abc50@gmail.com',
    to: 'abc@siu.edu',
    subject: 'sending email via node.js',
    text: 'It is easy'
};

transporter.sendMail(mailOptions,function(err, info){
    if(err){
        console.log(err);
    } else{
        console.log('Email sent:'+ info.response0);
    }
});
