import React from 'react';
import download from './download.png';
import images from './images.png';
import './Coin.css';

const coin = ({name,image,symbol,price,volume,priceChange,high,low,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h1> {name} </h1>
                    <p className="coin-symbol">{symbol}/USD</p>
                    <p>${price}</p>
                </div>  
                <div className="coin-data">
                <p>VOL {volume.toLocaleString()}</p>
                {priceChange < 0 ? ( 
                    <p className="red">{priceChange.toFixed(2)}% <img src={download} width="20" height="20" /></p>
                ):(<p className="green">{priceChange.toFixed(2)}% <img src={images} width="20" height="20" /> </p>
                )}
                <p> HIGH {high} </p>
                <p> LOW {low} </p>
                <p> Mkt Cap ${marketcap.toLocaleString()} </p>
            
                </div>
            </div>
        </div>
    )
}

export default coin;
