"use strict";

import React from 'react';
const Nav = require('./../components/nav.jsx');
const Footer = require('./../components/footer.jsx');

const Index = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                <div className="content flContainer clearfix">
                    <div>
                        <div className="image"></div>
                        <div className="summary">
                            Hi, I'm Anastasia, and I'm extremely passionate about animation! I hope one day I can say that I have many years of experience behind my shoulders. Today I can say that my big journey only began - I'm taking 6th class of animation in Animation Mentor School and I’m planning to finish it and be a professional character animator!
                        </div>
                        <h3>Demo reel</h3>
                        <div className="video">
                            <iframe src='https://www.youtube.com/embed/hI8-ttiNtc8' frameBorder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                        <div className="reelDescription">
                            <div className="title"><span className="bold">Reel Breakdown List</span></div>
                            <div className="description">
                                Responsible for all animation<br />
                                All rigs I took in Animation Mentor Online School<br />
                                Software: Maya
                            </div>
                        </div>
                    </div>
                </div>
                <Footer page="index" />
            </div>
        );
    }
});

module.exports = Index;