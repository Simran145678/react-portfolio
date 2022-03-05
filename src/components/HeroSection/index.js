import React,{useState} from 'react'
import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroBtnWrapper,
HeroH1,
HeroP,
ArrowForward,
ArrowRight
} from './HeroElements';
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'


const HeroSection = () => {

    const [hover,setHover]=useState(false)

    const onHover = () =>{
        setHover(!hover);
    }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'
/>        </HeroBg>
<HeroContent>
    <HeroH1>Hi There!</HeroH1>
    <HeroP>I am a programming enthusiast looking for a web developer role.

    </HeroP>
    {/* <HeroBtnWrapper>
        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}primary="true" dark="true">
            Get Started {hover?<ArrowForward/>:<ArrowRight/>}
        </Button>
    </HeroBtnWrapper> */}
</HeroContent>
    </HeroContainer>
  )
}

export default HeroSection