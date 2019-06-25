import React from 'react';
import Nav from './../components/nav.jsx';
import Footer from './../components/footer.jsx';

const Index = () => (
    <div>
        <Nav />
        <div className="content flContainer clearfix">
            <div>
                <div className="image"></div>
                <div className="summary">
                    Hi! My name is Anastasia and I am a character animator. I'm passionate about animation and illustration and want to share with you some of my works.
                </div>
                <h3>Demo reel</h3>
                <div className="video">
                    <iframe
                      src='https://player.vimeo.com/video/157975865'
                      frameBorder='0'
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    ></iframe>
                </div>
                <div className="reelDescription">
                    <div className="title"><span className="bold">Reel Breakdown List</span></div>
                    <div className="description">
                        Responsible for all animation, character modding, staging<br />
                        Rigs provided by Animation Mentor Online School<br />
                        Software: Maya
                    </div>
                </div>
            </div>
        </div>
        <Footer page="index" />
    </div>
);

export default Index;
