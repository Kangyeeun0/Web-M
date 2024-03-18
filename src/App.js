import logo from './logo.svg';
import './App.css';
import Button from './button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { func } from 'prop-types';
import Movie from './components/Movie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/abot-us">
                    <h1>Hello!</h1>
                </Route>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
