import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './AboutPlanet.scss'
import Loading from "../EternalComponents/Loading";

const PlanetArticle = () => {
    const [famous, setFamous] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    let location = useLocation();
    const data = location.state.info;
    const {
        name, rotation_period, diameter, climate,
        gravity, terrain, population, residents
    } = data;
    React.useEffect(() => {
        setLoading(true);
        Promise.all([
            residents.map(url =>
                fetch(url).then(value => value.json())
                    .then((value) => {
                        setFamous(value)
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            )
        ])
    }, []);
    return (
        <section className="section-article">
            <Link to='/'>Back to home</Link>
            <h1 className="title">
                {name}
            </h1>
            <div className="about-planet">
                <div className="about-planet__group">
                <span className="rotation-period">
                    Rotation period: {rotation_period}
                </span>
                    <span className="diameter">
                    Diameter: {diameter}
                </span>
                </div>
                <div className="about-planet__group">
                    <span className="climate">
                        Climate: {climate}
                    </span>
                    <span className="gravity">
                        Gravity: {gravity}
                    </span>
                </div>
                <div className="about-planet__group">
                    <span className="terrain">
                        Terrain: {terrain}
                    </span>
                    <span className="population">
                        Population: {population}
                    </span>
                </div>
            </div>
            <span className="residents">
                {loading ? <Loading/> : <div>{JSON.stringify(famous)}</div>}
            </span>
        </section>
    );
};

export default PlanetArticle;