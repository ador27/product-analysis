import React from 'react';
import './ReviewData.css'

const ReviewData = (props) => {
    const { name, review, rating, picture } = props.review;
    return (
        <div className='reviewss'>
            <img src={picture} alt="" />
            <h4><b>Name: </b> {name}</h4>
            <p><b>Review: </b>{review}</p>
            <p><b>Rating: </b>{rating}</p>

        </div>
    );
};

export default ReviewData;