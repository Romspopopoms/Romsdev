// pages/api/sendMail.js
import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Supprimez les lignes ci-dessous si vous ne voulez pas les utiliser
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Utilisez `true` pour le port 465, `false` pour d'autres ports
    auth: {
      user: process.env.ICLOUD_EMAIL, // Utilisez votre adresse iCloud
      pass: process.env.ICLOUD_APP_PASSWORD // Mot de passe d'application pour l'authentification
    }
  });

  // Vous devrez résoudre les conflits dans les options de courrier aussi.
  const mailOptions = {
    from: `"Formulaire de Contact" <${process.env.ICLOUD_EMAIL}>`, // Adresse de l'expéditeur
    to: process.env.ICLOUD_EMAIL, // Adresse du destinataire, identique à l'expéditeur
    subject: `Nouveau message de ${name}`, // Sujet du mail
    text: message, // Version texte du message
    html: `<p><strong>Nom:</strong> ${name} <br><strong>Email:</strong> ${email} <br><strong>Message:</strong> ${message}</p>` // Version HTML du message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
};

export default sendMail;
