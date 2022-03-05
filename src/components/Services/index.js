import React from 'react'
import Icon1 from '../../images/paypal.png';
import Icon2 from '../../images/contact-keeper.png';
import Icon3 from '../../images/furniture.png';
import Icon4 from '../../images/portfolio.png';

import {ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ButtonLink
    

} from './ServicesElements'
import {Button} from '../ButtonElement';

const Services = () => {
  return (
    <ServicesContainer id="projects">
    <ServicesH1>Projects</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>PayPal Clone</ServicesH2>
            <ServicesP> HTML, CSS(flexbox, grid, animations, parallax, transitions), vanilla javascript.</ServicesP>
            
            <Button primary="true" dark="false">
            <ButtonLink href="https://github.com/Simran145678/Paypal-clone" target="_blank">
            Source Code </ButtonLink>
        </Button>
        
        <Button primary="true" dark="true">
            <ButtonLink href="https://simran145678.github.io/Paypal-clone/" target="_blank" >
            Deployed Website
        </ButtonLink>
        </Button>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Contact Keeper</ServicesH2>
            <ServicesP>MERN stack, express validator, Context API, Postman, JWT authentication.</ServicesP>
            <Button primary="true" dark="false">
            <ButtonLink href="https://github.com/Simran145678/Contact-Keeper" target="_blank">
            Source Code </ButtonLink>
        </Button>
        
        <Button primary="true" dark="true">
            <ButtonLink href="https://cryptic-earth-07462.herokuapp.com/login" target="_blank" >
            Deployed Website
        </ButtonLink>
        </Button>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Furniture Store design</ServicesH2>
            <ServicesP>HTML, CSS (flexbox, grid, transitions and animations).</ServicesP>
            <Button primary="true" dark="false">
            <ButtonLink href="https://github.com/Simran145678/furniture-store-project-CSS" target="_blank">
            Source Code </ButtonLink>
        </Button>
        
        <Button primary="true" dark="true" >
            <ButtonLink href="https://simran145678.github.io/furniture-store-project-CSS/" target="_blank">
            Deployed Website
        </ButtonLink>
        </Button>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon4}/>
            <ServicesH2>Portfolio website </ServicesH2>
            <ServicesP>React, JavaScript, JSX, Hooks, styled-components,react-scroll.</ServicesP>
            <Button primary="true" dark="false">
            <ButtonLink href="https://github.com/Simran145678/furniture-store-project-CSS" target="_blank">
            Source Code </ButtonLink>
        </Button>
        
       
        </ServicesCard>
    
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services