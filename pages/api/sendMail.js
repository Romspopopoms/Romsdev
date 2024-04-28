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

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Utilisez `true` pour le port 465, `false` pour d'autres ports
    auth: {
<<<<<<< HEAD
      user: process.env.ICLOUD_EMAIL, // Utilisez votre adresse iCloud
      pass: process.env.ICLOUD_APP_PASSWORD // Mot de passe d'application pour l'authentification
=======
      user: `531517254891-7lggc7c7i65f3b92qhlcvdrbot6nhk41.apps.googleusercontent.com`,
      pass: `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` // Utilisez un mot de passe d'application généré
>>>>>>> 4976806fc2e8e90172ab49bf283ab330e770574a
    }
  });

  const mailOptions = {
<<<<<<< HEAD
    from: `"Formulaire de Contact" <${process.env.ICLOUD_EMAIL}>`, // Adresse de l'expéditeur
    to: process.env.ICLOUD_EMAIL, // Adresse du destinataire, identique à l'expéditeur
    subject: `Nouveau message de ${name}`, // Sujet du mail
    text: message, // Version texte du message
    html: `<p><strong>Nom:</strong> ${name} <br><strong>Email:</strong> ${email} <br><strong>Message:</strong> ${message}</p>` // Version HTML du message
=======
    from: `"Formulaire de Contact" <${process.env.ICLOUD_EMAIL}>`,
    to: `lantheaume.sylvain@gmail.com@gmail.com`, // Définissez cette variable dans vos variables d'environnement
    subject: `Nouveau message de ${name}`,
    text: message,
    html: `<p><strong>Nom:</strong> ${name} <br><strong>Email:</strong> ${email} <br><strong>Message:</strong> ${message}</p>`
>>>>>>> 4976806fc2e8e90172ab49bf283ab330e770574a
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
