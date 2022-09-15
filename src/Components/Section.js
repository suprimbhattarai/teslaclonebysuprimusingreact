import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from "styled-components"

function Section({title,description,backImg,leftBtntext,rightBtntext}) {
  return (
    <Wrap bg={backImg}>
    <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p><a href="">{description}</a></p>
        </ItemText></Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>{leftBtntext}</LeftButton>
                {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
            </ButtonGroup></Fade>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url(${(props)=>props.bg});
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    color: #1c1b1b;
    h1{
        font-size:35px;
        margin-top:16px;
        margin-bottom:12px;
        font-weight:600;
    }
`;

const Buttons = styled.div``
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:20px;
    @media (max-width:650px){
        flex-direction: column;
    }
    justify-content:center;
    align-items:center;
`;

const LeftButton = styled.div`
    background-color: #1c1b1b;
    color: white;
    border-radius: 100px;
    height:40px;
    width:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform: uppercase;
    font-size:12px;
    cursor: pointer;
    margin:8px;
    margin-top:15px;
    opacity:0.7;
    font-weight: 800;
`;
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;
const DownArrow = styled.img`
    margin-top:8px;
    margin-bottom:8px;
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    cursor: pointer;
`

export default Section;
