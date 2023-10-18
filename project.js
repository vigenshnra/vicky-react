import React from "react";
import './project.css';
import png from '../../assets/portfolio.png';
import photo from '../../assets/amz.png';
import img from '../../assets/free.png';

const Project = () =>{
    return(
        <section id="project">
            <div className="study">
              <h1 className="pro-head">projects</h1>
              <span className="pro-para">i have completed projets like below<br></br>
              I have many more projects to do<br></br>
              It will improve my web development skills and creative skills</span>
              
                 </div>
                 <div className="pro-menu">
                    <div className="pro-bar">

                        <div className="pro-png">

                    <img src={png} alt="png" className="pro-img"/>

                    </div>
                    <div className="pro-text">
                        <h2 className="pro-tit">PORTFOLIO</h2>
                        <p  className="pro-line">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                    </div>
                    </div>

                    <div className="pro-bar">

                    <div className="pro-png">

                    <img src={photo} alt="photo" className="pro-img"/>
                    </div>

                    <div className="pro-text">
                        <h2 className="pro-tit">AMAZON</h2>
                        <p  className="pro-line">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                    </div>
                    </div>
                    <div className="pro-bar">

                    <div className="pro-png">

                    <img src={img} alt="img" className="pro-img"/>

                    </div>
                    <div className="pro-text">
                        <h2 className="pro-tit">BOOTSTRAP</h2>
                        <p  className="pro-line">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                    </div>
                    </div>


                  </div>









        </section>






    )


};
export default Project;
