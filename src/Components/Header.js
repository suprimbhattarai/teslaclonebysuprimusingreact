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
      {cars && cars.map((car,index)=>(<a key={index} href="">{car}</a>))}
      </Menu>
      <Right>
        <a href="https://shop.tesla.com/" target="_blank">Shop</a>
        <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US" target="_blank">Tesla Account</a>
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
    margin:7px;
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
    img{
      cursor:pointer;
      height: 18px;
      width:140px;
      margin:10px 15px;
      padding:2px 10px;
    }
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
      font-size:14px;
      font-weight:550;
      padding: 0 10px;
      flex-wrap:no-wrap;
      margin:10px 10px;
      padding-bottom:8px;
    }
    a:hover{
      border-bottom:2px solid black;
    }
    @media (max-width:815px){
      display:none;
    }
`
const Right = styled.div`
    display:flex;
    align-items:center;
    a{
      font-size:14px;
      font-weight:550;
      padding: 0 10px;
      flex-wrap:no-wrap;
      margin:10px 10px;
      padding-bottom:5px;
      }
    a:hover{
      border-bottom:2px solid black;
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
