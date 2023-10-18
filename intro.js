import React from "react";
import './intro.css';
import bg from '../../assets/full-stack.bg.png';
import { Link } from "react-scroll";
import {Typewriter} from "react-simple-typewriter";


const Intro = () =>{

    const handleType = (count) => {{

        console.log(count)}
      }
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    
 
    return(
        <section id="hero-sec">

             <div className="intro-hero">

             <h1 className="name">
       I Am<br></br> Vignesh Nra<br></br>
        {' '}
        
        <span className="nra">

          <Typewriter
            words={['Learner', 'Achiever', 'Developer', 'designer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
      

                </div>



                <div className="bg-logo">
                      <img src={bg} alt="" className="mylogo"/>
                </div>

                <div className="hire">

                    <span className="box"><i class="fa-solid fa-briefcase"></i></span>

                 <Link><a href="#"className="hire-me">hire me</a></Link>

                </div>


        </section>
      
        
        
        )
};
export default Intro;