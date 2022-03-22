import React from "react";

function Title({heading,text}) {
    return (
        <div className="section-title">
            <p className="section-title_heading">{heading} <span>{text}</span></p>
            <hr/>
        </div>
    )
}

export default Title;