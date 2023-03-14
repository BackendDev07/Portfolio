import React from "react";
import styled from "styled-components";
import Page from "../page/Page";
import { Container, Img } from "./Continiue";
import Image from '../../assets/images/Mountains.jpg'

function Home() {
    return <Page>
        <Container>
            <HeaderTop>
                <HeaderBoxes>
                    <HeaderBox>
                        <Img style={{
                            objectFit: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 600
                        }} src={Image}/>
                    </HeaderBox>
                    <HeaderBox>
                        <HeaderName>Hello <br/> my name's Sherzod <br /> and I'm a full stack devloper</HeaderName>
                    </HeaderBox>
                </HeaderBoxes>

            </HeaderTop>
        </Container>
    </Page>
}

export default Home

const HeaderTop = styled.div`
    padding: 100px 0; 
`

const HeaderBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const HeaderBox = styled.div`
    
`

const HeaderName = styled.h1`
    font-size: 50px;
`