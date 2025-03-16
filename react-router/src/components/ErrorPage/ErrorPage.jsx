import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Error page</h2>
            <h4>{error.statusText || error.message}</h4>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;