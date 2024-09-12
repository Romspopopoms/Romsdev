const { google } = require('googleapis');
const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1');

export default async function handler(req, res) {
  try {
    // Authentification via Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/business.manage'], // Portée pour accéder aux avis
    });

    // Obtenir le client authentifié
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    // Requête pour obtenir les avis
    const response = await mybusinessbusinessinformation.accounts.locations.reviews.list({
      parent: 'accounts/ACCOUNT_ID/locations/LOCATION_ID', // Remplacez avec vos propres IDs
    });

    // Retourner les avis
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des avis' });
  }
}
