import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './AboutPlanet.scss'
import Loading from "../EternalComponents/Loading";

import IconRotation from './icon-rotation.svg'
import IconDiameter from './icon-diameter.svg'
import IconGravity from './icon-gravity.svg'
import IconTerrain from './icon-terrain.svg'
import IconClimate from '../PlanetCard/planet-climate.svg'
import IconPopulation from '../PlanetCard/planet-population.svg'

const PlanetArticle = () => {
    const [famous, setFamous] = React.useState([]);
    const [noFamous, setNoFamous] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [loadingPage, setLoadingPage] = React.useState(false);
    const [dataPlanet, setDataPlanet] = React.useState([])
    let location = useLocation();
    let data = location.state !== undefined && location.state.info;
    const {
        name, rotation_period, diameter, climate,
        gravity, terrain, population, residents
    } = data ? data : dataPlanet;

    React.useEffect(() => {
        const ac = new AbortController();
        setLoading(true);
        //if we go from anywhere
        if (location.state === undefined) {
            setLoadingPage(true);
            fetch('https://swapi.dev/api' + location.pathname)
                .then(data => data.json())
                .then(result => {
                    setDataPlanet(result);
                    if (result && result.residents.length > 0) {
                        Promise.all([
                            result.residents.map(url =>
                                fetch(url.replace('http://','https://')).then(value => value.json())
                                    .then((value) => {
                                        if (!famous) {
                                            setFamous(value)
                                        } else {
                                            setFamous(prev => [...prev, value])
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            )
                        ]).then(() => setLoading(false))
                    } else {
                        setNoFamous(true)
                    }
                    setLoading(false)
                    setLoadingPage(false)
                })
        }
        //if we go from cards
        if (!(location.state === undefined)) {
            if (data && residents.length > 0) {
                Promise.all([
                    residents.map(url =>
                        fetch(url.replace('http://','https://')).then(value => value.json())
                            .then((value) => {
                                if (!famous) {
                                    setFamous(value)
                                } else {
                                    setFamous(prev => [...prev, value])
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    )
                ]).then(() => setLoading(false))
            } else {
                setNoFamous(true)
            }
            setLoading(false)
            setLoadingPage(false)
        }
        return () => ac.abort();
    }, []);
    if (loadingPage) {
        return <Loading />
    } else {
        return (
            <section className="section-article">
                <Link className="btn-back" to='/'>Back to home</Link>
                <h1 className="title">
                    {name}
                </h1>
                <div className="about-planet">
                    <div className="about-planet__group">
                    <span className="rotation-period">
                        <img src={IconRotation} alt="Rotation"/>
                        <span>
                            Rotation period: {rotation_period}
                        </span>
                    </span>
                        <span className="diameter">
                        <img src={IconDiameter} alt="Diameter"/>
                        <span> Diameter: {diameter} </span>
                    </span>
                    </div>
                    <div className="about-planet__group">
                    <span className="climate">
                        <img src={IconClimate} alt="Climate"/>
                        <span>Climate: {climate}</span>
                    </span>
                        <span className="gravity">
                        <img src={IconGravity} alt="Gravity"/>
                        <span>Gravity: {gravity}</span>
                    </span>
                    </div>
                    <div className="about-planet__group">
                    <span className="terrain">
                        <img src={IconTerrain} alt="Terrain"/>
                        <span>Terrain: {terrain}</span>
                    </span>
                        <span className="population">
                        <img src={IconPopulation} alt="Population"/>
                        <span>Population: {population}</span>
                    </span>
                    </div>
                </div>
                {!noFamous ? <div className="residents">
                    <h1>Famous people that was born there: </h1>
                    {loading || famous.length === 0 ?
                        <Loading/> :
                        <table className="rwd-table">
                            <thead>
                            <tr>
                                {Object.keys(famous[0])
                                    .filter(item => item !== 'homeworld' && item !== 'films' && item !== 'species' && item !== 'vehicles' && item !== 'starships' && item !== 'url' && item !== 'created' && item !== 'edited').map((a, ind) => <th key={ind}>
                                        {a.toUpperCase()}
                                    </th>)}
                            </tr>
                            </thead>
                            <tbody>
                            {famous.map((a, index) => <tr key={index}>
                                {Object.keys(a)
                                    .filter(item => item !== 'homeworld' && item !== 'films' && item !== 'species' && item !== 'vehicles' && item !== 'starships' && item !== 'url' && item !== 'created' && item !== 'edited').map((key, ind) =>
                                        <td key={ind}>{a[key]}</td>
                                    )}
                            </tr>)}
                            </tbody>
                        </table>}
                </div> : <h1>Ooops.. There no famous people from this planet</h1>}


            </section>
        );
    }

};

export default PlanetArticle;