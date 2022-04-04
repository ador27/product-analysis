import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <section>
            <div>
                <div className='error'>
                    <p>
                        Error 404
                    </p>
                    <h1>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <Link to='/' className='link'>
                        Back to HOME
                    </Link>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default NotFound;