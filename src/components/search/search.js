import React from "react";
import Button from "../button/button";

function Search() {
    return (
        <div class="accordion search" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Hide
        <p className="search_subtitle">Search reway<img src="" alt=""/></p>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <form className="search_form">
            <label className="search_form-label">
                BRANDS
                <input type="text"/>
                <label className="search_form-label">
                    COLOUR
                   <select>
                       <option>Select Colour</option>
                   </select>
                </label>
                <label className="search_form-label" id="priceRange" class="form-label">
                    PRICE
                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="priceRange"></input>
                </label>
            </label>
        <Button type="submit" name="Search" modifer="primary" size="medium"/>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Search;