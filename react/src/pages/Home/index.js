import React from 'react';
import api from '../../services/api';

import './styles.css';

import shazam from '../../assets/img/herois/shazam.jpg';
import superman from '../../assets/img/herois/superman.jpg';
import aquaman from '../../assets/img/herois/aquaman.jpg';
import capitan from '../../assets/img/herois/capitanamerica.jpg';
import ironman from '../../assets/img/herois/ironman.jpg';
import wolverine from '../../assets/img/herois/wolverine.jpg';
import spiderman from '../../assets/img/herois/spiderman.jpg';
import ciborg from '../../assets/img/herois/ciborg.jpg';
import loki from '../../assets/img/herois/loki.jpg';
import robin from '../../assets/img/herois/robin.jpg';
import flash from '../../assets/img/herois/flash.jpg';
import green from '../../assets/img/herois/lanternaverde.jpg';
import wonder from '../../assets/img/herois/wonderwoman.jpg';
import batman from '../../assets/img/herois/batman.jpg';

export default function Home()
{

    async function handleProfile(id){
        try {
            await api.get(`herobyid/${id}`);
            
        } catch (e) {
            alert('Erro para ir ao profile.')
        }
    }
    return(
        <div>
        <section id="herosContainer">
            <div className="hero"><img src={shazam} alt="shazam"/></div>
            <div className="hero"><img src={superman} alt="superman"/></div>
            <div className="hero"><img src={aquaman} alt="aquaman"/></div>
            <div className="hero"><img src={capitan} alt="capitanamerica"/></div>
            <div className="hero"><img src={ironman} alt="ironman"/></div>
            <div className="hero"><img src={wolverine} alt="wolverine"/></div>
            <div className="hero"><img src={spiderman} alt="spiderman"/></div>
            <div className="hero"><img src={ciborg} alt="ciborg"/></div>
            <div className="hero"><img src={loki} alt="loki"/></div>
            <div className="hero"><img src={robin} alt="robin"/></div>
            <div className="hero"><img src={flash} alt="flash"/></div>
            <div className="hero"><img src={green} alt="green"/></div>            
            <div className="hero"><img src={wonder} alt="wonder"/></div>            
            <div className="hero"><img src={batman} alt="batman"/></div>                        
        </section>
        <footer>
            <p>© Copyright IsrraOliver - 2020, All Rights Reserved</p>
        </footer>
    </div>
    );
}