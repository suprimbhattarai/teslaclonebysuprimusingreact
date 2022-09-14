import React,{useState} from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import styled from 'styled-components';
import {selectCars} from "../features/Car/carSlice";
import {useSelector} from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a><img src="/images/logo.svg" alt="" /></a>
      <Menu>
      {cars && cars.map((car,index)=>(<a key={index} href="#">{car}</a>))}
      </Menu>
      <Right>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon onClick={()=>setBurgerStatus(true)}/>
      </Right>
      <Burger show={burgerStatus}>
      <CloseWrap>
        <Closebtn onClick={()=>setBurgerStatus(false)}/>
      </CloseWrap>
        {cars && cars.map((car,index)=>(<li><a key={index} href="#">{car}</a></li>))}
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Charger</a></li>
      </Burger>
    </Container>
  )
}

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
      font-weight:600;
      text-transform:uppercase;
      padding: 0 10px;
      flex-wrap:no-wrap;
    }
    @media (max-width:815px){
      display:none;
    }
`
const Right = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
      }
`
const MenuIcon = styled(MenuOutlinedIcon)`
      cursor:pointer;
`
const Burger = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:10;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${(props)=> props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s;
    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,.2);
    }
    li a{
      font-weight:600;
    }
`
const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
`
const Closebtn = styled(CloseSharpIcon)`
    cursor:pointer;
    &:hover{opacity:0.6;}
`


export default Header
