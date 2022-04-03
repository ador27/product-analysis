import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <Link to='/' className='menu'>HOME</Link>
            <Link to='/reviews' className='menu'>REVIEWS</Link>
            <Link to='/dashboard' className='menu'>DASHBOARD</Link>
            <Link to='/blogs' className='menu'>BLOGS</Link>
            <Link to='/about' className='menu'>ABOUT</Link>
        </div>
    );
};

export default Header;