import React from "react";
import styled from "styled-components";
import Github from "../../assets/icons/Github";
import Page from "../page/Page";
import { Container, Img } from "./Continiue";
import ImageOne from '../../assets/images/vercel.svg'

function Projects() {
    return <Page>
        <ProTop>
            <Container>
                <ProBoxes>
                    <ProBox href="https://vercel.com/dashboard">
                        <Img src={ImageOne}/>
                        <span>Vercel</span>
                    </ProBox>
                    <ProBox href="https://github.com/BackendDev07">
                        <Github/>
                        <span>Git Hub</span>
                    </ProBox>
                </ProBoxes>
            </Container>
        </ProTop>
    </Page>
}

export default Projects


const ProTop = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProBoxes = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20%;
`
const ProBox = styled.a`
display: flex;
align-items: center;
flex-direction: column;
font-size: 30px;
gap: 20px;
border-radius: 10px;
cursor: pointer;
padding: 50px;
border: 1px solid #000;
color: #000;
svg,path,img{
    width: 200px;
    height: 200px;
}
&:hover{
    transition:  all 0.5s ease;
        color: #fff;
    background-color: #000;
    svg,path,img{
        fill: #fff;
    }
}
`