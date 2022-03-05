import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled.a`
-----------------------------------------------------
// border: #ff206e 0.1rem solid;
//   padding: 1rem 1rem;
//   font-family: "Montserrat", sans-serif;
//   font-size: medium;
  

//   color: #ff206e;
//   background-color: #fff;




-------------------------------------------------------
border-radius:50px;
background:${({primary})=>(primary?'#fff':'#ff206e')};
white-space:nowrap;
padding:${({big})=>(big?'2px 4px':'1px 2px')};
color:${({dark})=>(dark?'#602437':'#ff9ebb')}
font-size:${({fontBig})=>(fontBig?'20px':'16px')}
outline:none;
border: #ff9ebb 0.1rem solid;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all .2s ease-in-out;
margin-top:.5rem;

&:hover{
    transition all .2s ease-in-out;
    background:${({primary})=>(primary?'#602437':'#01Bf71')};
    color: #602437;
//   background-color: #fff;
  border: #602437 0.1rem solid;
}
`;
