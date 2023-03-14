import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./pages/Continiue";

function Header() {
    const navigate = useNavigate()
    const handleAbout = () => {
        navigate('/about')
    }
    const handleF = () => {
        navigate('/freinds')
    }
    const handlePro = () => {
        navigate('/projects')
    }
    const handleCon = () => {
        navigate('/contact')
    }
    const handleHome = () => {
        navigate('/home')
    }
    return <div>
        <HeaderTop>
        <Container>
            <HeaderBox>
                <HeaderLogo onClick={handleHome}>
                    <span>Portfolio</span>
                </HeaderLogo>
                <MinBox>
                <HeaderMenu>
                    <HeaderLink onClick={handleAbout}>About</HeaderLink>
                    <HeaderLink onClick={handleF}>Freinds</HeaderLink>
                    <HeaderLink onClick={handlePro}>Projects</HeaderLink>
                    <HeaderLink>Item</HeaderLink>
                </HeaderMenu>
                <HeaderContact>
                    <HeaderBtn onClick={handleCon}> 
                        <span>Contact</span>
                    </HeaderBtn>
                </HeaderContact>
                </MinBox>
            </HeaderBox>
        </Container>
        </HeaderTop>
    </div>
}

export default Header

const HeaderLogo = styled.span`
    font-size: 40px;
    font-weight: 500;
    cursor: pointer;
`
const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

`
const HeaderContact = styled.div``
const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`
const HeaderLink = styled.a`
    font-size: 20px;
    cursor: pointer;
`
const HeaderBtn = styled.div`
    padding: 10px 30px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid #000;
    &:hover{
        transition: all 0.5s ease;
        background-color: #fff;
        color : #000;
    }
`

const MinBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
`

const HeaderTop = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`