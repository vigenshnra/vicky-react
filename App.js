import Navbar from './portfolio/navbar/nav';
import Intro from './portfolio/intro/intro';
import Skill from './portfolio/skills/skill';
import Work from './portfolio/works/works';
import Contact from './portfolio/contact.js/contact';
import Project from './portfolio/projects/project';
import Footer from './portfolio/footer/footer';
function APP () {
  return(
    <div>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default APP;

  