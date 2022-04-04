import React from 'react';
import hoodie from './images/hoodie.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='homepage'>
            <div className="details">
                <h1 className='title'>WELCOME TO AFFINITY</h1>
                <h1 className='title1'>SEE THE BEST HOODIE IN TOWN</h1>
                <p>A Hoodie is a sweatshirt with a hood. Hoodies often include a muff sewn onto the lower front, and usually a drawstring to adjust the hood opening. It covers most of the head and neck and sometimes the face. Hoodies may be worn for protection against the environment</p>

            </div>
            <div className="hoodie">
                <img src={hoodie} alt="" />

            </div>
        </div>
    );
};

export default Home;