import React from 'react'
import Jetoplogo from './images/Jetoplogo.svg';
function Footer(){
    return (
        <footer>
        <div className="powered">
            <div className="text">powered by</div>
            <img src={Jetoplogo} alt="can't find"></img>
        </div>
        </footer>
    )
}
export default Footer;