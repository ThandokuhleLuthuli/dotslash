import React from "react";
import Button from "../button/button";

function SelectBox() {
    return(
        <div className="select-box">
            <div className="select-box_container">
                <form className="select-box_form">
                <label className="select-box_form-label" for="size"> Size</label>
                <select className="select-box_select" id="size">
                    <option> select size</option>
                </select>
                <label className="select-box_form-label" for="qty">Quantity</label>
                <select className="select-box_select" id="qty">
                    <option> select Quantity</option>
                </select>
                <Button type="button" name="add to cart" modifer="primary" size="large"/>
                </form>
            </div>
        </div>
    )
}

export default SelectBox;