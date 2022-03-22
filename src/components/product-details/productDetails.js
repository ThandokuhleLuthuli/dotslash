import React from 'react';

function Details({store,tag}) {
    return (
        <div className="product-details">
            <div className="product-details_container">
                <h3 className="product-details_title"> 
                    Dylan Hiker Boot
                    <span className="product-details_subtitle"><img src={store} alt="store-front"/>SUPERBALIST</span>
                </h3>
                <p className="product-details_feature"><span className="product-details_feature-text">Fabication</span> <span className="product-details_feature-text product-details_feature-text--bold">Faux Leather</span> </p>
                <p className="product-details_feature"><span className="product-details_feature-text">Colour</span> <span className="product-details_feature-text product-details_feature-text--bold"><span></span>Brown</span> </p>
                <p className="product-details_feature"><span className="product-details_feature-text">Brand</span> <span className="product-details_feature-text product-details_feature-text--bold">Superbalist</span> </p>
                <hr/>
                <p className="product-details_subtitletwo"> Product Details</p>
                <ul className="product-details_list">
                    <li className="product-details_list-item">Hiking boot</li>
                    <li className="product-details_list-item">Speed laces</li>
                    <li className="product-details_list-item">Lace-up design</li>
                    <li className="product-details_list-item">Rubber sole</li>
                </ul>
                <div className="product-details_footer">
                    <span className="product-details_discount">
                        <img  src={tag} alt=""/> <i>-40% Off</i>
                    </span>
                    <p className="product-details_price">
                        <span className="product-details_price-old">R 599</span>
                        R350
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details;