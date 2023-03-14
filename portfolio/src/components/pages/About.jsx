import React from "react";
import styled from "styled-components";
import Github from "../../assets/icons/Github";
import Image from '../../assets/images/Mountains.jpg'
import Page from "../page/Page";
import { Container, Img } from "./Continiue";
import Figma from '../../assets/icons/Figma'
import Netlify from '../../assets/icons/Netlify'
import ImageTwo from '../../assets/images/ant.png'
import ImageFour from '../../assets/images/vercel.svg'
import ReactLogo from '../../assets/icons/ReactLogo'
import { Progress } from 'antd';
import Js from '../../assets/icons/Js'
import Html from '../../assets/icons/Html'
import Css from '../../assets/icons/Css'
import Type from '../../assets/icons/Type'
import Node from '../../assets/icons/Node'
import Angular from '../../assets/icons/Angular'
import Vue from '../../assets/icons/Vue'
import ImageFive from '../../assets/images/preact.png'
import ImageSix from '../../assets/images/svelte.png'
import ImageSeven from '../../assets/images/Back.png'

function About() {
    return <Page>
        <AboutTop>
            <Container>
                <AboutBoxes>
                    <AboutBox>
                        <Img style={{
                            objectFit: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 600
                        }} src={Image} alt="" />
                    </AboutBox>
                    <AboutBox>
                        <AboutCon>
                            <AboutText>
                                <span>Name:</span>
                                <span>Sherzod</span>
                            </AboutText>
                            <AboutText>
                                <span>Surename:</span>
                                <span>Abdullaev</span>
                            </AboutText>
                            <AboutText>
                                <span>Age:</span>
                                <span>14 years</span>
                            </AboutText>
                            <AboutText>
                                <span>Address:</span>
                                <span>Uzbekistan, Kxorezm</span>
                            </AboutText>
                        </AboutCon>
                    </AboutBox>
                </AboutBoxes>
                <AboutSection>
                    <AboutMain>
                        <AboutText>
                            <span>Sites that I use for layout</span>
                        </AboutText>
                        <Box>
                        <AboutItem href="https://github.com/">
                            <Github/>
                            <span>Git Hub</span>
                        </AboutItem>
                        <AboutItem href="https://www.figma.com/">
                            <Figma/>
                            <span>Figma</span>
                        </AboutItem>
                        <AboutItem href="https://www.netlify.com/">
                            <Netlify/>
                            <span>Netlify</span>
                        </AboutItem>
                        <AboutItem href="https://ant.design/">
                            <Img src={ImageTwo} alt="" />
                            <span>Ant Design</span>
                        </AboutItem>
                        <AboutItem href="https://vercel.com/">
                            <Img src={ImageFour}/>
                            <span>Vercel</span>
                        </AboutItem>
                        <AboutItem>
                            <ReactLogo/>
                            <span>React js</span>
                        </AboutItem>
                        </Box>
                    </AboutMain>
                </AboutSection>

                <AboutApp>
                    <AppName>My Skills</AppName>

                    <AppBoxes>
                        <AppBox>
                            <Progress type="dashboard" percent={85}/>
                            <span>
                            <ReactLogo/>
                                React JS</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={65}/>
                            <span>
                                <Js/>
                                Java Script</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={95}/>
                            <span>
                                <Html/>
                                HTML</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={98}/>
                            <span>
                                <Css/>
                                CSS</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={80}/>
                            <span>SCSS</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={1}/>
                        <span>
                            <Type/>
                            TypeScript</span>
                        </AppBox>
                        <AppBox>
                        <Progress type="dashboard" percent={1}/>
                            <span>
                                <Node/>
                                Node JS</span>
                        </AppBox>
                    </AppBoxes>
                </AboutApp>

                
            </Container>
            
        </AboutTop>
        <GoTop>
            <Container>
                <GoName>Famous front-end frameworks in the world</GoName>
                <GoBoxes>
                    <GoBox>
                        <ReactLogo/>
                        <span>React JS</span>
                    </GoBox>
                    <GoBox>
                        <Angular/>
                        <span>Angular</span>
                    </GoBox>
                    <GoBox>
                        <Vue/>
                        <span>Vue JS</span>
                    </GoBox>
                    <GoBox>
                        <Img src={ImageFive}/>
                        <span>Preact</span>
                    </GoBox>
                    <GoBox>
                        <Img src={ImageSix}/>
                        <span>React JS</span>
                    </GoBox>
                    <GoBox>
                        <Img src={ImageSeven}/>
                        <span>Backbode JS</span>
                    </GoBox>
                </GoBoxes>
            </Container>
        </GoTop>
    </Page>
}

export default About

const GoName = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 50px;
    margin-bottom: 100px;
`
const GoTop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    padding: 100px 0;
`

const GoBoxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: #fff;
`
const GoBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
font-size: 30px;
padding: 20px;
border: 1px solid #fff;
border-radius: 10px;
cursor: pointer;
svg,path,img{
    width: 150px;
    height: 150px;
    /* object-fit: cover; */
    background-size: cover;
    background-repeat: no-repeat;
}
`
const AppBoxes = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 75px;
margin-bottom: 150px;
`
const AppBox = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const AppName = styled.h1`
    margin-top: 200px;
    margin-bottom: 50px;
`

const AboutApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AboutTop = styled.div`
padding: 100px 0;
`
const AboutBox = styled.div`
`
const AboutBoxes = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`

const AboutCon = styled.div``
const AboutText = styled.div`

display: flex;
align-items: center;
gap: 10px;
font-size: 40px;
`

const AboutSection = styled.div`
margin-top: 120px;
`
const AboutMain = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`

const Box = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`

const AboutItem =  styled.a`
display: flex;
align-items: center;
flex-direction: column;
list-style: none;
text-decoration: none;
color: #000;
padding: 20px;
border: 1px solid #56525229;
border-radius: 10px;
cursor: pointer;
gap: 10px;
svg,path,img{
    width: 90px;
    height: 90px;
}
&:hover{
    transition: all 0.5s ease;
    border:1px #000 solid;
}
`