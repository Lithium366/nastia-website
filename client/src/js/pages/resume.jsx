import React from 'react';
import Nav from './../components/nav.jsx';
import Footer from './../components/footer.jsx';

class Resume extends React.PureComponent {

    print() {
        window.print();
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="content flContainer resume clearfix">
                    <h3>Resume</h3>
                    <ul className="getResumeOptions">
                        <li><a href="/public/static/Anastasia.Sevrugina.resume.pdf" target="_blank" title="Download PDF" className="icon-box-add">Download PDF</a></li>
                    </ul>
                    <div className="summary">
                        I'm a character animator with a passion to all things about animation, films and games. I graduated from Animation Mentor School in 2016 and have a strong knowledge of principles of animation. I am a quick learner, work well under pressure and have a good eye for details and shot creation.
                    </div>
                    <div className="leftColumn">
                        <h4>Experience</h4>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">MPC</span></div>
                            <div className="date">April 2018 - present</div>
                            <div className="description">Previs / Postvis Animator</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">The Third Floor</span></div>
                            <div className="date">June 2017 - March 2018</div>
                            <div className="description">Previs Artist / Animator</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">IdeaRocket</span></div>
                            <div className="date">October 2016 - January 2017</div>
                            <div className="description">Animation Intern</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor Anim Jam project</span> (Volunteer Work)</div>
                            <div className="date">July 2015 – October 2015</div>
                            <div className="description">Contributor in animated short film "Circus Jam"</div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor Peer Buddy Program</span></div>
                            <div className="date">fall 2015</div>
                            <div className="description">Volunteer Work <span className="xtr">(Helped students with assignments)</span></div>
                        </div>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Photobanks</span></div>
                            <div className="date">2011 - 2017</div>
                            <div className="description">Self employed Microstock Artist, Illustrator, Digital Artist</div>
                        </div>
                        <h4>Education</h4>
                        <div className="resumeItem">
                            <div className="title"><span className="bold">Animation Mentor,</span> The Online Animation School</div>
                            <div className="date">09/2014 - 06/2016</div>
                            <div className="description">Certificate of completion in “Character Animation Program”</div>
                            <div className="extra">Mentored by &mdash; Anthony Wong, Richard Fournier, Ray Ross, Nicole Herr, Dave Burgess, Sean Sexton</div>
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
                                <li>After Effects</li>
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
};

export default Resume;
