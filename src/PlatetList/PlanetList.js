import React, { useState, useEffect } from 'react';
import PlanetCard from "../PlanetCard/PlanetCard";
import './Button.scss';
import Loading from "../EternalComponents/Loading";

const PlanetList = () => {
    const [loading, setLoading] = useState(true)
    const [nextPage, setNextPage] = useState(false)
    const [error, setError] = useState(false);
    const [info, setInfo] = useState([])
    const [results, setResults] = useState([])
    const [url, setUrl] = useState('https://swapi.dev/api/planets/')
    useEffect(() => {
        fetchData(url);
    }, [])

    const fetchData = (urlFetch) => {
        if (results.length > 0) {
            setNextPage(true);
        }
        fetch(urlFetch)
            .then((data) => data.json())
            .then((resp) => {
                setInfo(resp)
                if (results.length > 0) {
                    setResults((prev) => [...prev, ...resp.results])
                    setNextPage(false)
                } else {
                    setResults(resp.results)
                }
                setUrl(resp.next)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            });
        console.log(results)
        console.log(info)
    }

    if (error) {
        return (
            <>Error</>
        );
    }
    return (
        <>
            {!loading ?
            <>
                <section className="section-planets">
                    {results.map((item, ind) => <PlanetCard key={ind} {...item} /> )}
                </section>
                <div>{nextPage ? <Loading /> : ''}</div>
                {info.next ?
                    <a className="btn" type="button" onClick={() => fetchData(url)}>
                    Load more
                    </a> : ''
                }
            </> : <Loading />
            }
        </>
    );
};


export default PlanetList;