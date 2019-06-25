"use strict";

import React from 'react';
import { Link } from 'react-router'

const Nav = React.createClass({

    propTypes: {
        page: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div className="footer" id={`footer-`+this.props.page}>
                <div className="flContainer">
                    <div className="contact">
                        <div className="phone">+1 (646) 620-9442</div>
                        <a href="mailto:anastasia.sevrugina@gmail.com">anastasia.sevrugina@gmail.com</a><br />
                        Greater Los Angeles Area
                        <div className="social">
                            <a href="https://www.linkedin.com/in/anastasia-sevrugina-4310b332" target="_blank" title="LinkedIn" className="icon icon-linkedin2"></a>
                            <a href="https://vimeo.com/user34045335" target="_blank" title="Vimeo" className="icon icon-vimeo"></a>
                        </div>
                    </div>
                    <div className="copyright">&copy; 2015 by Anastasia Sevrugina</div>
                </div>
            </div>
        );
    }
});

module.exports = Nav;