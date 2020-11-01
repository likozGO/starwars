import React from 'react';
import PlanetIcon from './planet-icon.png'
import PlanetPopulation from './planet-population.svg'
import PlanetClimate from './planet-climate.svg'
import './PlanetCard.scss';
import {Link} from "react-router-dom";

const PlanetCard = ({name, climate, population}) => {
    return (
    <figure className="article-card --without-image">
        <Link to={'/planet/' + name}>
            <header className="article-card__header">
                <img src={PlanetIcon} alt="Sauro Vegas"
                     className="article-card__avatar"/>
                <span className="article-card__name">{name}</span>
            </header>
            <figcaption className="article-card__content">
                <div className="article-card__content-bg"></div>
                <h1 className="article-card__title">
                    <img src={PlanetClimate} alt="Climate"/>
                    <div className="group">
                        <span className="color-green">Climate: <br /></span>
                        <span className="underline">{climate}</span>
                    </div>
                </h1>
                <h1 className="article-card__title">
                    <img src={PlanetPopulation} alt="Population"/>
                    <div className="group">
                        <span className="color-green">Population: <br /> </span>
                        <span className="underline">{population}</span>
                    </div>
                </h1>
                <div className="article-card__info">
                    <div>
                        <span className="article-card__time">View more...</span>
                    </div>
                </div>
            </figcaption>
        </Link>
    </figure>
    );
};

export default PlanetCard;