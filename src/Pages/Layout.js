import React from 'react';
import Navigation from './Partials/Navigation'

export default function Layout({children}){
    return(
        <React.Fragment>
            <Navigation />
            <div className="container">
                { children }
            </div>
        </React.Fragment>
    )
}