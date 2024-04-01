import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Homer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 bg-primary">
                        <Link
                            className="logo"
                            to='/home'
                            onClick={() => handleLinkClick('/home')}
                        >
                            to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homer;
