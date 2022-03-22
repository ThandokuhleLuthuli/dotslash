import React from "react";
import bootOne from '../../assets/images/boot1.png';
import bootTwo from '../../assets/images/boot2.png'
import bootThree from '../../assets/images/boot3.png'
import bootFour from '../../assets/images/boot4.png'
import bootFive from '../../assets/images/boot5.png'


function Carousel() {
    return (
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bootOne} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bootTwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bootThree} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bootFour} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bootFive} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel;