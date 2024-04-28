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
    <div className="container mx-auto mt-16 xl:mt-0 p-12 xl:p-40">
      <h2 className="text-4xl text-center font-bold mt-4 ">Contactez-moi <span className='text-accent'>!</span></h2>
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
      </form>
    </div>
  );
};

export default Contact;
