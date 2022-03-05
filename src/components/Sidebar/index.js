import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
   SocialIconLink,
    SidebarMenu,
    SocialIcons
    
} from './SideElements';

const index = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle}>
    <CloseIcon/>
</Icon>
<SidebarWrapper>
    <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
        <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
        <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
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
                       
                   
    </SidebarMenu>
   
</SidebarWrapper>
    </SidebarContainer>
  )
}

export default index