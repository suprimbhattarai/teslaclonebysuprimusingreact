import React from 'react'
import styled from "styled-components"

function Section({title,description,backImg,leftBtntext,rightBtntext}) {
  return (
    <Wrap bg={backImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>{leftBtntext}</LeftButton>
                {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
            </ButtonGroup>
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
    color: black;
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
    background-color: black;
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
    margin:10px;
    opacity:0.8;
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