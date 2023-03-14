import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Right from "../../assets/icons/Right";
import Smile from '../../assets/icons/Smile'

function Continiue() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
    }
    return <div>
        <Container>
            <Conbox>
                <Smile/>
                <ConName>
                    Welcome to my portfolio website
                </ConName>
                <ConBtn onClick={handleClick}>
                    <span>Continiue</span>
                    <Right/>
                </ConBtn>
            </Conbox>
        </Container>
    </div>
}

export default Continiue

export const Container = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;     
`

const Conbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20%;
`

export const Img = styled.img`
    
`

const ConName = styled.h1`
    font-weight: 500;
    margin-bottom: 50px;
`

const ConBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Tilt Neon', cursive;
    background-color: black;
    color: #fff;
    &:hover{
        transition: all 0.5s ease;
        background-color: #fff;
        color: #000;
        svg,path{
            fill: #000;
            stroke: #000;
        }
    }
` 