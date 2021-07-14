var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rimalsuraj50@gmail.com',
        pass: '';
    }
});

var mailOptions = {
    form: 'rimalsuraj50@gmail.com',
    to: 'suraj.rimal#siu.edu',
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