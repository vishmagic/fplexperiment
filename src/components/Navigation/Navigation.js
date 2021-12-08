import React from 'react';
import Logo from '../Logo/Logo';

import './Navigation.css';

const Navigation = ({route, onRouteChange}) => {
        return (
            (route === 'club') ?
            <div className = 'nav_container'>
                <div className = 'nav_logo'>
                    <Logo />
                    {/* <h1>FPL</h1> */}
                </div>
                <nav>
                    <p className = 'cl_act'
                    onClick = {() => onRouteChange('club')}>CLUBS</p>
                    <p onClick = {() => onRouteChange('player')}>PLAYERS</p>
                </nav>
            </div>
            :
            <div className = 'nav_container'>
                <div className = 'nav_logo'>
                    <Logo />
                    {/* <h1>FPL</h1> */}
                </div>
                <nav>
                    <p onClick = {() => onRouteChange('club')}>CLUBS</p>
                    <p className = 'pl_act'
                    onClick = {() => onRouteChange('player')}>PLAYERS</p>
                </nav>
            </div>
        );
    }

export default Navigation;