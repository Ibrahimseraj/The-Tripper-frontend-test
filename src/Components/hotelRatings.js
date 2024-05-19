import React, { useState } from 'react';
import axios from 'axios';


function HotelRatings({ hotelId }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new rating object
    const newRating = {
      rating,
      comment
    };

    try {
      const myToken = localStorage.getItem('myToken');
      const response = await axios.post(`http://localhost:5050/hotel/rating/${hotelId}`, newRating, {
        headers: {
          Authorization: `Bearer ${myToken}`
        }
      });

      if (response.status === 201) {
        // Rating added successfully
        console.log('Rating added successfully');
        // Reset the rating and comment fields
        setRating(1);
        setComment('');
      } else {
        // Error adding rating
        console.error('Error adding rating');
      }
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };

  return (
    <div>
      <h2>Hotel Ratings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
}

export default HotelRatings;