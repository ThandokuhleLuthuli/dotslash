import React from 'react';
import Button from '../button/button';


function Header () {
    return (
        <div className="header">
            <div className="header_container">
                <p  className="header_title">Adventure is just around the corner!</p>
                <div className="header_left">
                    <Button type="button" name="FIND A STORE" modifer="transparent-blue" size="small"/>
                    <p className="header_title"> Not in South Africa?</p>
                </div>
            </div>

        </div>
    )
}

export default Header;