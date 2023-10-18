import React from "react";
import './works.css';
import bg1 from '../../assets/bg11.png';
import bg2 from '../../assets/bg10.png';
import bg3 from '../../assets/bg.png';
import bg4 from '../../assets/bg13.png';
import bg5 from '../../assets/bg12.png';
import bg6 from '../../assets/bg21.png';
const Work = () => {
    return(
<section id="work">

    <div className="works">

        <h2 className="works-head">portfolio</h2>
        <p className="works-para">I take pride in paying attension to the smallest<br></br> 
        details and making sure that my works is pixel perfect.<br></br>
        i am exciting to bring my skill and my experience to help <br></br>
        businesses achive their goals and create a strong online presence</p>

    </div>
    <div className="work-img">
        <img src={bg1} alt=" " className="works-img1"/>
        <img src={bg2} alt=" " className="works-img2"/>
        <img src={bg3} alt=" " className="works-img3"/>

        <img src={bg4} alt=" " className="works-img4"/>

        <img src={bg5} alt=" " className="works-img5"/>

        <img src={bg6} alt=" " className="works-img6"/>


      
    </div>
    
    

    <div className="see">
        <a className="seemore" href="#">see more</a>
        </div>
  



</section>

    )
};

export default Work;