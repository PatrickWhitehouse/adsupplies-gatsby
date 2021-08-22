import React from 'react'
import styled from "@emotion/styled";

import herobg from '../images/hero/tanker.jpg'


const HeroStyled = styled.div`
      display: flex;
      align-items: center;
      justify-content: center; 
      position: absolute;
      width: 100vw;
      height: 97vh;
      top: 0;
      left: 0;
      background-image: url(${herobg});
      background-size: cover;
      background-position: center;
      z-index: -100;
`

const Title = styled.h1`
    color: #FFF;
    font-size: 45px;
`

const Hero = ({title}) => {
    return (
        <HeroStyled>
            <Title>{title ? title : "No title set"}</Title>
        </HeroStyled>
    )
}


export default Hero;