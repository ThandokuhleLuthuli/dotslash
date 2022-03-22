import React from 'react';

function Breadcrumbs({href}) {
    return ( 
        <div className="breadcrumbs">
            <ul className="breadcrumbs_container">
                <li className="breadcrumb">
                    <a className="breadcrumb_link" href={href}>Home</a>
                </li>
                <li className="breadcrumb">
                    <a className="breadcrumb_link" href={href}>Boots</a>
                </li>
                <li className="breadcrumb">
                    <a className="breadcrumb_link" href={href}>Dylan Hiker Boots</a>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumbs;