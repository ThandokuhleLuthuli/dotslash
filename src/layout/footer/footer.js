import React from "react";
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer_container">
                <div className="row">
                    <div className="col-4">
                        <h3 className="footer_heading">Account</h3>
                        <ul className="footer_list"> 
                            <li className="footer_list-item">Account details</li>
                            <li className="footer_list-item">Orders</li>
                            <li className="footer_list-item">Returns and Exchanges</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <h3 className="footer_heading">The Company</h3>
                        <ul className="footer_list"> 
                            <li className="footer_list-item">About us</li>
                            <li className="footer_list-item">Careers</li>
                            <li className="footer_list-item">Contact</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h3 className="footer_heading">Follow us!</h3>
                        <ul className="footer_list footer_list_icon"> 
                            <li className="footer_list-icon"> <img src={facebook} alt="facebook"/></li>
                            <li className="footer_list-icon"><img src={instagram} alt="instagram"/></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;