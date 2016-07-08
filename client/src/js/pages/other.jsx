"use strict";

import React from 'react';
const Nav = require('./../components/nav.jsx');
const Footer = require('./../components/footer.jsx');
import { Link } from 'react-router';

const Other = React.createClass({

    render: function () {

        const illustrations = (
            <div className="imagesSection">
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration04.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration11.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration24.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration06.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration02.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration17.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration12.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration26.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration13.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration07.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration23.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration10.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration22.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration25.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration01.jpg" />
                </div>
                <div className="banner">
                    <img src="/public/img/portfolio/illustrations/illustration16.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration18.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration19.jpg" />
                    <div className="vertical">
                        <img src="/public/img/portfolio/illustrations/illustration08.jpg" />
                        <img src="/public/img/portfolio/illustrations/illustration14.jpg" />
                    </div>
                    <img src="/public/img/portfolio/illustrations/illustration03.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/illustrations/illustration20.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration09.jpg" />
                    <img src="/public/img/portfolio/illustrations/illustration21.jpg" />
                </div>
            </div>);

        const sketchbook = (
            <div className="imagesSection sketchbook">
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_13.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_19.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_20.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_23.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_18.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_22.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_28.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_21.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_35.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_14.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_24.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_8.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_1.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_16.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_25.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_2.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_34.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_3.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_38.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_17.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_36.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_10.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_32.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_26.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_30.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_4.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_33.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_7.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_37.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_15.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_29.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_6.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_39.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_9.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_12.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_40.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_11.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_5.jpg" />
                </div>
                <div>
                    <img src="/public/img/portfolio/sketches/sketch_27.jpg" />
                    <img src="/public/img/portfolio/sketches/sketch_31.jpg" />
                </div>
            </div>
        );

        let content = illustrations;
        if (this.props.params.section === 'sketchbook') {
            content = sketchbook;
        }

        return (
            <div>
                <Nav />
                <div className="content flContainer clearfix portfolio">
                    <h3>Portfolio</h3>
                    <ul className="portfolioNav">
                        <li><Link to={`/portfolio/illustrations`}>Illustrations</Link></li>
                        <li><Link to={`/portfolio/sketchbook`}>Sketchbook</Link></li>
                    </ul>
                    {content}
                </div>
                <Footer page="other" />
            </div>
        );
    }
});

module.exports = Other;