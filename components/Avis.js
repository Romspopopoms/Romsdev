import React, { useEffect, useState } from 'react';

const Avis = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/get-reviews')
            .then(response => response.json())
            .then(data => setReviews(data.reviews || []))
            .catch(err => console.error('Erreur:', err));
    }, []);

    return (
        <div>
            <h2>Avis des clients</h2>
            <ul>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <li key={index}>
                            <h3>{review.reviewer.displayName}</h3>
                            <p>{review.comment}</p>
                        </li>
                    ))
                ) : (
                    <p>Aucun avis disponible</p>
                )}
            </ul>
        </div>
    );
};

export default Avis;
