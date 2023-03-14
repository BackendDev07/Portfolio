import React from "react";
import styled from "styled-components";
import ContactSvg from "../../assets/icons/ContactSvg";
import Page from "../page/Page";
import { Input } from 'antd'
import { Container } from "./Continiue";
import Telegram from '../../assets/icons/Telegram'
import Instagram from '../../assets/icons/Instagram'
import Youtube from '../../assets/icons/Youtube'
import Github from '../../assets/icons/Github'
import TextArea from "antd/es/input/TextArea";

function Contact() {
    return <Page>
        <Container>
            <ConBox>
                <ConName>
                    <span>Contact with me</span>
                    <ContactSvg/>
                </ConName>
                <ConBoxes>
                    <ConMain>
                    <ConSmm>
                        <SmmBox href='https://t.me/dev07112008' >
                            <Telegram/>
                        </SmmBox>
                        <SmmBox href="https://www.youtube.com/@browithmac">
                            <Youtube/>
                        </SmmBox>
                        <SmmBox href="https://www.instagram.com/browithmac.uz/">
                            <Instagram/>
                        </SmmBox>
                        <SmmBox href="https://github.com/BackendDev07">
                            <Github/>
                        </SmmBox>
                    </ConSmm>
                        <Box>
                        <InputBox>
                        <span>Name</span>
                            <Input style={{
                                width: '100%'
                            }}/>
                        </InputBox>
                        <InputBox>
                        <span>Password</span>
                        <Input style={{
                                width: '100%'
                        }}/>
                        </InputBox>
                        <InputBox>
                        <span>Comment</span>
                            <TextArea/>
                        </InputBox>
                        <SubmitBtn type="submit">Submit</SubmitBtn>
                        </Box>
                    </ConMain>
                   
                </ConBoxes>
            </ConBox>
        </Container>
    </Page>
}

export default Contact

const ConBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border: 1px solid #5f5b5b5f;
    padding: 50px 100px;
    margin-top: 100px;
    border-radius: 10px;
`

const ConName = styled.h1`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const ConBoxes = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
`
const ConMain = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`
const InputBox = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    span{
        margin: 10px 0;
    }
`

const SubmitBtn = styled.button`
    margin: 20px 0;
    width: 50%;
    padding: 10px 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    &:hover{
        transition: all 0.5s ease;
        background-color: #fff;
        color: #000;

    }
`

const SmmBox = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
    margin: 0 50px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    &:hover{
        transition: all 0.7s ease;
        background-color: #000;
        svg,path{
            fill: #fff;
        }
    }
`

const ConSmm = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`