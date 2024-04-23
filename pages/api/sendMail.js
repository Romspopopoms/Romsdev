// pages/api/sendMail.js
import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true pour 465, false pour d'autres ports
    auth: {
      user: `devprosyl@gmail.com`,
      pass: `W^Nm7j$adM^oNz` // Utilisez un mot de passe d'application généré
    }
  });

  const mailOptions = {
    from: `"Formulaire de Contact" <${process.env.ICLOUD_EMAIL}>`,
    to: `lantheaume.sylvain@gmail.com@gmail.com`, // Définissez cette variable dans vos variables d'environnement
    subject: `Nouveau message de ${name}`,
    text: message,
    html: `<p><strong>Nom:</strong> ${name} <br><strong>Email:</strong> ${email} <br><strong>Message:</strong> ${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
};

export default sendMail;
