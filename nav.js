import React from 'react';
import logo from '../../assets/v-logo.jpg';
import { Link } from 'react-scroll';

import './nav.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logho'/>
            
            <div className='nav-menu'>
                <ul>

                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className='nav-list'><li><a href="#">home</a></li></Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='nav-list'><li><a href="#">about</a></li></Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className='nav-list'><li><a href="#">work</a></li></Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500}className='nav-list'><li><a href="#">contact</a></li></Link>
             </ul>
            </div>
           
        
         < button className="contact-btn" onClick={ () => {

            document.getElementById('contact').scrollIntoView({behavior:'smooth'});

          }}>contact me</button >  

         
        
               

        </nav>


    )

};
export default Navbar;