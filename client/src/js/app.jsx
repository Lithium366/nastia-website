"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index.jsx';
import Resume from './pages/resume.jsx';
import OtherWorks from './pages/other.jsx';

const ga = require('react-ga');
ga.initialize('UA-71640692-1');

const logPageView = function () {
    ga.pageview(window.location.pathname);
};

ReactDOM.render((
    <Router onUpdate={logPageView}>
        <Route path="/" exact component={Index} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio/:section?" component={OtherWorks} />
    </Router>
), document.getElementById('mainContainer'));
