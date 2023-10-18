import React from "react";
import './footer.css';
import li from '../../assets/li.png';
import gt from '../../assets/gt.png';
import yu from '../../assets/u1.png';
import fa from '../../assets/fa2.png';
import twr from '../../assets/twr.png';

const Footer = () => {
    return(
<div className="footer">


<div className="links">
            <span className="social-links"><img src={li} alt="fa" className="link"/></span>
            <span className="social-links"><img src={gt} alt="fa" className="link"/></span>
            <span className="social-links"><img src={yu} alt="fa" className="link"/></span>
            <span className="social-links"><img src={fa} alt="fa" className="linked"/></span>
            <span className="social-links"><img src={twr} alt="fa"className="link"/></span>

        </div>


    <span className="rights">all rights received 2023 vigneshanrn@gmail.com</span>



</div>



    )
};
export default Footer;