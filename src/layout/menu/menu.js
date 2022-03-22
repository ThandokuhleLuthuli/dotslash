import React from "react";
import logo from '../../assets/images/Logologo.svg';
import Button from '../../components/button/button';
import gift from '../../assets/images/giftgift.png'
import star from '../../assets/images/starstar.png'
import heart from '../../assets/images/heart.png'
import tag from '../../assets/images/tag.png'

function Menu () {
    return (
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
    </div>
    <ul class="nav">
      <li className="nav_link"><a href="#">Apparels</a></li>
      <li className="nav_link"><a href="#">Shoes</a></li>
      <li className="nav_link"><a href="#">Equipment</a></li>
      <li className="nav_link"><a href="#">Gift</a></li>
    </ul>
    <ul class="nav">
      <li className="nav_icon"><a href="#"><img src={gift} alt="gift"/></a></li>
      <li className="nav_icon"><a href="#"><img src={star}/></a></li>
      <li className="nav_icon"><a href="#"><img src={heart}/></a></li>
      <li className="nav_icon"><a href="#"><img src={tag}/></a></li>
    </ul>
    <ul class="nav">
      <li className="nav_button"><a href="#">Sign Up</a></li>
      <li><Button type="button" name="login" size="small" transparent="transparent-blue" /></li>
    </ul>
  </div>
</nav>
    )
}

export default Menu;