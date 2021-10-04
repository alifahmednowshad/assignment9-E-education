import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import About from '../About/About';
import Admission from '../Admission/Admission';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import Navber from '../Navber/Navber';
import NotFound from '../NotFound/NotFound';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Router>
                <Navber></Navber>
                <Switch>
                    <Route exact path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/about'>
                        <About></About>
                    </Route>
                    <Route exact path='/courses'>
                        <Courses></Courses>
                    </Route>
                    <Route exact path='/admission'>
                        <Admission></Admission>
                    </Route>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Header;