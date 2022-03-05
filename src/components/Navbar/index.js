import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavLinks,
    NavMenu,
    NavItem,
    SocialIcons,
    SocialIconLink
} from './NavbarElements'


const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav]=useState(false);
const changeNav=()=>{
    if(window.scrollY >= 80){
        setScrollNav(true)
    }else{
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll',changeNav);
}, []);

const toggleHome=()=>{
    scroll.scrollToTop()
}

  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome} >
                i'm Harsimran Kaur
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about"  smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Skills</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</NavLinks>
                </NavItem>
                <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/kaurharsimran05/" target="_blank"
                        aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        
                        <SocialIconLink href="https://github.com/Simran145678" target="_blank"
                        aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                       
                    </SocialIcons>
                
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to="/signin">Sign </NavBtnLink>
            </NavBtn> */}
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;