import React from 'react';
import Loader from './Loading.gif'

const Loading = () => {
    return (
        <div className="loader" style={{width: '100%', textAlign: 'center'}}>
            <img src={Loader} alt="Loading..." style={{margin: '0 auto', width: '100%', height: 'auto', maxWidth: '120px', display: 'block'}}/>
            <span style={{fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', textTransform: 'uppercase'}}>Loading...</span>
        </div>
    );
};

export default Loading;