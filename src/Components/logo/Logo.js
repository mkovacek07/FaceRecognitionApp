import React from 'react';
import Tilt from 'react-tilt'
import face from './Logo.png';
import './Logo.css';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-5 ma3" options={{ max : 25 }} style={{ height: 100, width: 150 }} >
                <div className="Tilt-inner"><img style={{paddingTop: '5px'}} alt='logo' src={face}/> </div>
            </Tilt>
        </div>
    );
};

export default Logo;