import React from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';

import logoHero from '../assets/logoHero.png';

export default function Header({pagina}){

    return (
        <header>
                <img src={logoHero} alt="logo FindMyHero"/>
                <div className="sub_container">
                <h1>
                    <span class="color1">Find </span>
                    <span class="color2"> My </span>
                    <span class="color1">Hero</span>
                </h1>
                    <nav>
                        <ul>
                            <li><a href="#">List All</a></li>
                            <li><a href="#">Contats</a></li>
                        </ul>
                        <div className="input-search">
                            <div className="search"><FiSearch/></div>
                            <input placeholder="Search for your hero here" type="search"></input>
                        </div>
                    </nav>

                </div>

        </header>

    );
}

