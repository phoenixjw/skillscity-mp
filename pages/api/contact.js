import nodemailer from 'nodemailer'
export default async(request, response) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'phoenixjw9320@gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
    }
});
try {
    const emailRes = await transporter.sendMail ({
        from: email,
        to:'phoenixjw9320@gmail.com',
        subject: `contact form submission from ${name}`,
        html: `<p> You have a a new contact form submission</p><br>
        <p><strong> Name: </strong> ${name} </p><br>
        <p><strong> Email: </strong> ${email} </p><br>
        <p><strong> Message </strong> ${message} </p><br>`,
    });
    console.log('Message Sent', )
} catch (err) {
    console.log(err)
}
    response.status(200).json(req.body);
  };
  