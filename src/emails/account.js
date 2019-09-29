const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hssojitra@gmail.com',
        subject: 'Greetings! thanks for joining me!',
        text: `Its overwelming to become you as part of our services, Thank you so much ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hssojitra@gmail.com',
        subject: 'What is went wrong. Tell us we would help you out!',
        text: `Feel sorry to see you left from our platform ${name}. Hope you will connect soon!`
    })
}
//sendWelcomeEmail contains various property as many objects so to export this {curly braces needed.}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}