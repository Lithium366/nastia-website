"use strict";

import React from 'react';
const Nav = require('./../components/nav.jsx');
const Footer = require('./../components/footer.jsx');

const Resume = React.createClass({

    print: function () {
        window.print();
    },

    render: function () {
        return (
            <div>
                <Nav />
                <div className="content flContainer resume clearfix">
                    <h3>Resume</h3>
                    <ul className="getResumeOptions">
                        <li><a onClick={this.print} title="Print" className="icon-printer">Print</a></li>
                        <li><a href="/public/static/Anastasia.Sevrugina.resume.pdf" target="_blank" title="Download PDF" className="icon-box-add">Download PDF</a></li>
                    </ul>
                    <div className="summary">
                        I am very passionate about animation since I was a kid (I dreamed to know how those little characters can be alive on the screen). I learned a lot about animation and now I can say that animation - exactly what I really want to do! My objective is to become a professional character animator. I have a strong understanding of 12 principles of animation, big attention to details and I love to do sketches. I would love to join a creative team  and continue learn and grow as an animator.
                    </div>
                    <div className="leftColumn">
                        <h4>Education</h4>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor,</span> The Online Animation School</div>
                            <div className="date">09/2014 - present</div>
                            <div className="description">Character Animation Program</div>
                            <div className="extra">Mentors &mdash; Anthony Wong, Richard Fournier, Ray Ross, Nicole Herr</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">“UI web development”,</span> EPAM Labs</div>
                            <div className="date">12/2011 - 01/2012</div>
                            <div className="description">HTML4/CSS2, HTML5/CSS3, JavaScript</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Belarusian State University of Informatics and Radioelectronics</span></div>
                            <div className="date">09/2002 - 08/2007</div>
                            <div className="description">Masters degree in telecommunications</div>
                            <div className="extra">Specialty &mdash; multi-channel telecommunication systems.</div>
                        </div>
                        <h4>Experience</h4>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor Anim Jam project</span></div>
                            <div className="date"> July 2015 – October 2015</div>
                            <div className="description">Contributor in animated short film "Circus Jam"</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor Peer Buddy Program</span></div>
                            <div className="date">fall 2015</div>
                            <div className="description">Volunteer Work <span className="xtr">(Helped students with assignments)</span></div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Photobanks</span></div>
                            <div className="date">2011 - present</div>
                            <div className="description">Self employed Microstock Artist, Illustrator, Digital Artist</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Beltelecom</span> (leading telecommunication company in Belarus)</div>
                            <div className="date">2007 - 2010</div>
                            <div className="description">Engineer-administrator of telecommunication systems</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Belarusian Association of expert and surveyors</span></div>
                            <div className="date">2006 - 2009</div>
                            <div className="description">Software engineer <span className="xtr">(Visual Basic for Application)</span></div>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <h4>Skills</h4>
                        <div className="resumeItem">
                            <ul>
                                <li>3D animation</li>
                                <li>Drawing</li>
                                <li>Illustration</li>
                                <li>Storyboarding</li>
                            </ul>
                            <ul>
                                <li>Maya</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </div>
                        <h4>Languages</h4>
                        <div className="resumeItem">
                            <ul>
                                <li>English – professional working proficiency</li>
                                <li>Russian – native.</li>
                            </ul>
                        </div>
                        <div className="resumeItem">
                            <div className="girlImage"></div>
                        </div>
                    </div>
                </div>
                <Footer page="resume" />
            </div>
        );
    }
});

module.exports = Resume;