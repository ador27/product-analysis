import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`reviewData.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='title2'>
                <h2>Customer Reviews :{reviews.length}</h2>

            </div>

            <div className='review'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

        </div >
    );
};

export default Reviews;