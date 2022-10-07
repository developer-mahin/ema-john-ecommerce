import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header'
import './Error.css'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <Header></Header>
            {
                error && (
                    <div className='error'>
                        <div>
                            <p><span>{error.status}</span></p>
                            <p>Ops! An Error Ocurred!</p>
                            <p>Page {error.statusText}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;