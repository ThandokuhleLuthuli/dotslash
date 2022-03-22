import React from 'react';
import Button  from '../button/button';
import envelope from '../../assets/images/envelopeenvelope.png'
import times from '../../assets/images/times.png';

function Mail () {

    const handleClose = () => {
        let close = document.getElementById("close");
        let mailList = document.querySelector(".mail-list")

        mailList.classList.add("mail-list-none");
    
    }
    return (
        <div className="mail-list">
            <img className="close" src={times}  atl="close" id="close" onClick={handleClose}/>
            <div className="mail-list_container"> 
                <img className="mail-list_image" src={envelope} alt="envelope"/>
                <h4 className="mail-list_title">Sign up to our mailing list!</h4>
                <form className="mail-list_form">
                    <label className="mail-list_form-label">
                         Email
                        <input className="mail-list_form-input" type="text" placeholder="Enter email address"/>
                    </label>
                    <Button type="submit" name="Submit" modifer="secondary" size="medium"/>
                </form>
            </div>
        </div>
    )
}

export default Mail;