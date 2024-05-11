import nodemailer from 'nodemailer';

// Configuration de transporter pour l'authentification OAuth2 avec Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'masaintebible.fr@gmail.com',
    clientId: process.env.GMAIL_CLIENT_ID || "69415188575-dk09nb3b2togcqefnm3pfk9e8sges5um.apps.googleusercontent.com",
    clientSecret: process.env.GMAIL_CLIENT_SECRET || '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',
    refreshToken: process.env.GMAIL_REFRESH_TOKEN || '1//03dGGuBVB2Gs-CgYIARAAGAMSNwF-L9IrYhNw2KWiaxjpqF0foCrRAGJeFfU5mpoHfdm_nZKUIHY0k4zcb0VsZVVlaNxI9CB18-o',
  }
});

// Fonction pour envoyer un email avec les informations du formulaire au propriétaire
async function sendEmail(formData) {
  const { name, email, message } = formData;
  const mailOptions = {
    from: 'masaintebible.fr@gmail.com',
    to: 'contact@romsdev.fr',
    subject: 'Nouveau message du formulaire de contact',
    text: `
      Vous avez reçu un message de 
      ${name}
      Message : ${message}

      N'hésitez pas à recontacter cette personne via cette adresse-mail --> ${email}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return 'Email sent successfully';
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Handler pour les requêtes HTTP à cet endpoint
async function emailHandler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await sendEmail(req.body);
      res.status(200).send({ message: result });
    } catch (error) {
      res.status(500).send({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).send({ error: 'Method not allowed' });
  }
}

export default emailHandler;
