import React from 'react';


const currencyFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});


export default function ProductInfo(item) {

    return (
        <div className="product">
            <img src={item.ImageSrc}/>
            <div className="data">
            <h1>{item.Name}</h1>
            <p>{item.Description}</p>
            </div>
            <div className="price">{currencyFormatter.format(item.Price)}</div>
        </div>
    );
}
