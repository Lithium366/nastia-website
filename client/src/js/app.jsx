"use strict";

import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router';
const createBrowserHistory = require('history/lib/createBrowserHistory');
const ga = require('react-ga');

const Index = require('./pages/index.jsx');
const Resume = require('./pages/resume.jsx');
const OtherWorks = require('./pages/other.jsx');

ga.initialize('UA-71640692-1');

const logPageView = function () {
    ga.pageview(window.location.pathname);
};

render((
    <Router history={createBrowserHistory()} onUpdate={logPageView}>
        <Route path="/" component={Index} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={OtherWorks}>
            <Route path="/portfolio/:section" component={OtherWorks} />
        </Route>
    </Router>
), document.getElementById('mainContainer'));