import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section title="Model S" description="Order Online for Touchless Delivery" backImg="/images/model-s.jpg" leftBtntext="Custom Order" rightBtntext="Existing Inventory"/>
        <Section title="Model 3" description="Order Online for Touchless Delivery" backImg="/images/model-3.jpg" leftBtntext="Custom Order" rightBtntext="Existing Inventory"/>
        <Section title="Model X" description="Order Online for Touchless Delivery" backImg="/images/model-x.jpg" leftBtntext="Custom Order" rightBtntext="Existing Inventory"/>
        <Section title="Model Y" description="Order Online for Touchless Delivery" backImg="/images/model-y.jpg" leftBtntext="Custom Order" rightBtntext="Existing Inventory"/>
        <Section title="Solar Panel" description="Lowest Cost Solar Panels in America" backImg="/images/solar-panel.jpg" leftBtntext="Order Now" rightBtntext="Learn More"/>
        <Section title="Solar Roof" description="Produce Clean Energy From Your Roof" backImg="/images/solar-roof.jpg" leftBtntext="Order Now" rightBtntext="Learn More"/>
        <Section title="Accessories" description="" backImg="/images/accessories.jpg" leftBtntext="Shop Now"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`