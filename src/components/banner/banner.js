import React from 'react';
import Button from '../button/button';

function Banner() {
    return (
        <div className="banner">
            <div className="banner_container">
                <h3 className="banner_title">
                    Summer sale!
                    <span className="banner_text">Up to 50% off!</span>
                </h3>
                <Button size="small" name="Shop now" type="button" transparent="transparent"/>
            </div>
        </div>
    )
}

export default Banner;