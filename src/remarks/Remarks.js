// remarks/Remarks.js
import React, { useState } from 'react';
import './Remarks.css';

const Remarks = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: '', rating: 0 });

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!newReview.text || newReview.rating === 0) {
      alert('Please provide both text and a rating.');
      return;
    }

    setReviews([...reviews, newReview]);
    setNewReview({ text: '', rating: 0 });
  };

  return (
    <div className="remarks-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Your Review:
          <textarea
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
          />
        </label>
        <label>
          Rating:
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
          >
            <option value={0}>Select Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>Rating:</strong> {review.rating}, <strong>Review:</strong> {review.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Remarks;
