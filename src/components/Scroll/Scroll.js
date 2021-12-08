import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    
    if (props.route === 'club') {
        return (
            <div className = 'ovrScroll' style = {{overflowY: 'scroll', width: '80%', height: '60%'}}>
                {props.children}
            </div>
        )
    } else {
        return (
            <div className = 'ovrScroll' style = {{overflowY: 'scroll', width: '80%', height: '1.8%'}}>
                {props.children}
            </div>
        )
    }
}

export default Scroll;