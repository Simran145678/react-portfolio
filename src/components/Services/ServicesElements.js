import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'
export const ServicesContainer = styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#fff;


@media screen and (max-width:768px){
    height:1550px;
}
@media screen and (max-width:480px){
    height:1550px;
}
`;

export const ServicesWrapper = styled.div`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;
color:#602437;

@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr;
}
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding:0 20px;
}
`;

export const ServicesCard=styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,.2);
transition:all .2s ease-in-out;

&:hover{
    transform:scale(1.02);
    transition:all .2s ease-in-out;
    cursor:pointer;
}
`;

export const ServicesIcon = styled.img`
height:160px;
width:180px;
margin-bottom:10px;
object-fit:cover;
outline: .09rem solid black;
`;

export const ServicesH1 = styled.h1`
font-size:2.5rem;
color:#ff206e;;
margin-bottom:64px;

@media screen and (max-width:480px){
    font-size:2rem;
}
`;

export const ServicesH2=styled.h2`
font-size:1.1rem;
margin-bottom:5px;
background:#ffe5ec;
padding:.1rem;
`;

export const ServicesP = styled.p`
font-size:1rem;
text-align:center;

`;
export const ButtonLink=styled.a`
color:#ff9ebb;
text-decoration:none;
&:hover{
    transition all .2s ease-in-out;
   
    color: #fff;`
// export const ArrowForward= styled(MdArrowForward)`
// margin-left:8px;
// font-size:20px;
// `;

// export const ArrowRight= styled(MdKeyboardArrowRight)`
// margin-left:8px;
// font-size:20px;