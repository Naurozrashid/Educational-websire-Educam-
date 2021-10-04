import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

const NotFound = () => {
    return (
        <div className="my-5">
            <h1 className="font-style">Oops! Page Not Found</h1>
            <p>
                <h3 className="pb-4">The page you are looking for was moved,</h3>
                <h3 className="pb-4">removed, renamed or might never existed.Home Page</h3>
            </p>
            <Link to="/home">
            <button  className="fs-6 fw-bold btn-regular">Home</button>
        </Link>
        </div>
    );
};

export default NotFound;