import React from "react";
import './skill.css';
import UI from '../../assets/u.png';
import WEB from '../../assets/w.png';
import App from '../../assets/apo.png';

const Skill = () => {
    return(
        <section id="skills">

            <div className="skill-sec">
                <span className="skill-head">What I Do</span>
                <p className="skill-para">i am a web developer skilled with creating <br></br>
                visually appealing user friendly websites.<br></br>
                i am proficient in HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT JS, NODE JS</p>

                </div>

                <div className="skills-menu">

                    <div className="skill-bar">

                    <div className="skill-png">

                    <img src={UI} alt="" className="skill-img"/>

                    </div>

                    <div className="skill-text">
                        <h2 className="sub-tit">UI/UX Design</h2>
                        <p  className="skill-line">this is a demo text, you can write your own content here.</p>

                    </div>

                    </div>

                    <div className="skill-bar">

                      <div className="skill-png">

                     <img src={WEB} alt="" className="skill-img"/>

                     </div>

                       <div className="skill-text">
                        <h2  className="sub-tit">Web Design</h2>
                       <p  className="skill-line">this is demo text can be changed while making production ready website.</p>

                     </div>

                       </div>
                         
                       <div className="skill-bar">

                       <div className="skill-png">

                   <img src={App} alt="" className="skill-img"/>

                   </div>

                      <div className="skill-text">
                      <h2  className="sub-tit">APP</h2>
                       <p className="skill-line">you can write text realated mobile application devlopment</p>

                         </div>

                           </div>






                </div>


        </section>
         

    )



};
export default Skill;