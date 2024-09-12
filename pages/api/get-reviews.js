import { google } from 'googleapis';

export default async function handler(req, res) {
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    // Assurez-vous que l'utilisateur est bien authentifié ici

    // API Google My Business pour récupérer les avis
    const mybusiness = google.mybusiness({
        version: 'v4',
        auth: oauth2Client
    });

    try {
        const reviews = await mybusiness.accounts.locations.reviews.list({
            parent: 'accounts/{accountId}/locations/{locationId}', // Remplacez par vos ID
        });

        res.status(200).json(reviews.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des avis:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des avis' });
    }
}
