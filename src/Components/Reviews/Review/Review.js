import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, review, rating, picture } = props.review;
    return (
        <div className='reviewDetails'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h5>Review: <small>{review}</small></h5>
            <h5>Rating: {rating}</h5>

        </div>
    );
};

export default Review;