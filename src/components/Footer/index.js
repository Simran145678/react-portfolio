import React from 'react'
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
import {FooterContainer,
FooterWrap,
FooterLink,
FooterLinksContainer,
FooterLinkItems,
FooterLinksWrapper,
FooterLinkTitle,
SocialIconLink,
SocialIcons,
SocialLogo,
SocialMedia,
SocialMediaWrap,
WebsiteRights
} from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
            437-221-2328    |   harsimrankaur708@gmail.com  |   1265 Forest Hill, Oakville, ON, L6H 2C4
               
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    
                    <WebsiteRights>© Harsimran Kaur</WebsiteRights>
                    {/* <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/kaurharsimran05/" target="_blank"
                        aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="//" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="" target="_blank"
                        aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                       
                    </SocialIcons> */}
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer