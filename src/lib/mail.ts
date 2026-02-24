import nodemailer from 'nodemailer';

export const sendNotificationEmail = async (name: string, email: string, subject: string,  message: string) => {
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Abyss" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: subject || `New Message of ${name}`,
    html: `
      <div style="background-color: #000814; color: #ffffff; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h1 style="color: #00f5ff; border-bottom: 2px solid #003566; padding-bottom: 10px;">Portfolio's Message</h1>
        <p><strong>Sender :</strong> ${name}</p>
        <p><strong>Mail :</strong> ${email}</p>
        <div style="background-color: #001d3d; border-left: 4px solid #00f5ff; padding: 15px; margin-top: 20px;">
          <p style="font-style: italic; color: #e0e1dd;">"${message}"</p>
        </div>
        <p style="font-size: 0.8em; margin-top: 30px; color: #003566;">This Message is stored on your databse, you can manage it on your <a href="http://localhost:3000/admin/messages" style="color: #00f5ff;">Dashboard</a></p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};