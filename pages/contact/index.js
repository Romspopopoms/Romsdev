// pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoie du formulaire à l'API
      const response = await axios.post('/api/sendMail', formData);
      alert('Message envoyé avec succès!');
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Erreur lors de l’envoi du message:', error);
      alert('Erreur lors de l’envoi du message.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl text-center font-bold mb-8">Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-1">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-1">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-1">Message :</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 p-2"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
