import React from 'react';

import './styles.css';

import Fita1 from '../../assets/img/fita4.png';
import Fita2 from '../../assets/img/fitav3.png'

export default function Profile(){
    return(
        <div className="container">
            <div className="profileContainer">
                <div><img src={Fita1} alt="fita"/></div>
                <div><img src={Fita2} alt="fita"/></div>
            </div>

        </div>
    );
}

