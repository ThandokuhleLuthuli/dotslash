import React from 'react';


function Card({discount,stock,title,price,subtitle,href,src,icon,tag,noDiscount,noStock}) {
    return (
        <div className={`card card--${noDiscount} card--${noStock}`}>
            <div className="card_image">
                <span className="card_discount "><img src={tag} alt="tag"/><i>{discount}</i></span>
                <span className="card_stock"><i>{stock}</i></span>
                <img src={src} alt="boot"/>
            </div>
            <div className="card_details">
                <h4 className="card_title">{title}</h4>
                <p className="card_subtitle"><img src={icon} alt="store-front"/>{subtitle}</p>
                <p className="card_footer"><span className="card_price">{price}</span><a href={href} className="card_button">view</a></p>
            </div>
        </div>
    )
}

export default Card;