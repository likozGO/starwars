import React from 'react';
import './ErrorPage.scss'
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Something gone wrong</h1>
            <p>Please dont worry</p>
            <Link to="/"><h1 className="undrline">Go to home page</h1></Link>
        </div>
    );
};

export default ErrorPage;