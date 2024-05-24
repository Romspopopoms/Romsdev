import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Script from 'next/script';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(''); // Pour gérer l'état de l'envoi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Envoi du message...'); // Informer l'utilisateur que l'envoi est en cours
    try {
      // Envoie du formulaire à l'API
      const response = await axios.post('/api/sendMail', formData);
      setSubmitStatus('Message envoyé avec succès!'); // Message de succès
    } catch (error) {
      console.error('Erreur lors de l’envoi du message:', error);
      setSubmitStatus('Erreur lors de l’envoi du message.'); // Message d'erreur
    }
  };

  return (
    <>
      <Head>
        <title>Contact | RomsDev&apos; Portfolio</title>
        <meta name="description" content="Contactez RomsDev pour vos besoins en développement web sur mesure à La Ciotat et Marseille." />
        <meta name="keywords" content="contact, développement web, création de sites, freelance, RomsDev, La Ciotat, Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d&apos;Azur" />
        <link rel="canonical" href="https://romsdev.fr/contact" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-17C5QX19CG" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-17C5QX19CG');
        `}
      </Script>
      <div className="container mx-auto mt-8 xl:mt-0 p-12 xl:p-40">
        <h2 className="text-4xl text-center font-bold mt-4">Contactez-moi <span className='text-accent'>!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="my-2 xl:my-8">
            <label htmlFor="name" className="block text-lg font-medium mb-1">Nom <span className='text-accent'>:</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 p-2 text-black rounded-lg"
            />
          </div>
          <div className="my-2 xl:my-8">
            <label htmlFor="email" className="block text-lg font-medium mb-1">Email <span className='text-accent'>:</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 p-2 text-black rounded-lg"
            />
          </div>
          <div className="my-2 xl:my-8">
            <label htmlFor="message" className="block text-lg font-medium mb-1">Message <span className='text-accent'>:</span></label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 p-2 text-black rounded-lg"
            />
          </div>
          <div className="text-center my-2 xl:my-8">
            <button type="submit" className="bg-accent text-white hover:text-accent hover:bg-white font-bold py-2 px-4 rounded">
              Envoyer
            </button>
          </div>
          {submitStatus && <div className="text-center mt-4 text-lg">{submitStatus}</div>} {/* Affichage du statut d'envoi */}
        </form>
      </div>
    </>
  );
};

export default Contact;
