"use strict";

import React from 'react';
import { Link } from 'react-router'

const Nav = React.createClass({

    render: function () {
        return (
            <nav className="nav" id="nav">
                <div className="flContainer clearfix">
                    <div className="name">
                        <h1><Link to={`/`}>Anastasia Sevrugina</Link></h1>
                        <h2>Character animator</h2>
                    </div>
                    <ul>
                        <li><Link to={`/`}>Reels</Link></li>
                        <li><Link to={`/resume`}>Resume</Link></li>
                        <li><Link to={`/portfolio`}>Other works</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;