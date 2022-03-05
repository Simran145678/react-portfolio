import React from 'react'
import {Button} from '../ButtonElement'
import ImgCar from "../../images/svg-1.svg"
import  {
     ImgWrap,
    InfoContainer,
InfoRow,
InfoWrapper,
Column2,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
Img } from './InfoElements'

const InfoSection = ({lightBg,
id,imgStart,topLine,lightText,darkText,description2,description,buttonLabel,headline,img,alt,primary,dark,dark2}) => {
  return (
    <>
    <InfoContainer  lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    
                    <Heading lightText={lightText}>{headline}</Heading>
                    {/* <TopLine>{topLine}</TopLine> */}
                    <Subtitle darkText={darkText}>{description[0]}<br/><br/>
                    {description[1]}<br/><br/>
                    {description[2]}<br/><br/>
                    {description[3]}<br/><br/>
                    {description[4]}<br/><br/>
                    {description[5]}<br/><br/>
                    {description[6]}
        
                    </Subtitle>
                    {/* <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                    {/* <BtnWrap>
                        <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        primary={primary?1:0}
                        dark={dark?1:0}
                        dark2={dark2?1:0}
                        >{buttonLabel}</Button>
                    </BtnWrap> */}
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection;