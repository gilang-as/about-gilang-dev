import React from "react";
import styled from "@emotion/styled";
import Typewriter from 'typewriter-effect';
import SoundBar from "~/components/music";
import {ThemeMode} from "~/styles/themes/themes";
import Switch from "~/styles/themes/switch";

type MainProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const Main = styled.main<MainProps>`
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.PageMain.Background};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled("section")`
  width: 90%;
  padding-right: 5%;
  padding-left: 5%;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  position: fixed;
  left: 0;
  right: 0;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
type HeaderProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const Header = styled.header<HeaderProps>`
  background: ${props => props.theme.PageMain.BodyBackground};
  box-shadow: ${props => props.theme.PageMain.BodyShadow};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.875rem;
  position: relative;
  transition: box-shadow .3s ease-in-out;
  display: flex;
  margin-bottom: 1.875rem;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;
const Profile = styled("div")`
  display: flex;
  align-items: start;
  flex: 0 0 50%;
  padding-right: 1.875rem;
  position: relative;
  &:before {
    content: '';
    background-color: #EBF0F2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 1px;
  }
  @media only screen and (max-width: 991px){
    align-items: center;
    flex-direction: column;
    padding-right: 0;
    padding-bottom: 1.25rem;
    text-align: center;

    &:before {
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
    }
  }
`;
const ProfileBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4.125rem;
  overflow: hidden;
  @media (max-width: 991px) {
    padding-bottom: 1rem;
  }
`;
const ImagePeople = styled("img")`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
const Information = styled("div")`
  margin-left: 1.5rem;
  @media only screen and (max-width: 991px){
    margin-left: 0;
  }
`;
type InformationNameProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const InformationName = styled.h4<InformationNameProps>`
  margin-bottom: 0.125rem;
  color: ${props => props.theme.PageMain.TextNameColor};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  font-size: 1.5rem;
  margin-top: 0;
`;
type InformationJobProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const InformationJob = styled.div<InformationJobProps>`
  color: ${props => props.theme.PageMain.TextJobColor};
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
`;
const InformationLink = styled("span")`
  display: flex;
  align-items: center;
  font-size: 1rem;
  list-style: none;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0;
  @media only screen and (max-width: 991px){
    justify-content: center;
  }
`;
const InformationLinkItem = styled("li")`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const InformationLinkLink = styled("a")`
  color: #5E6E80;
  text-decoration: none;
`;
type InformationLinkItemSVGProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
    type: string;
    fill?: string;
}
const InformationLinkItemSVG = styled.svg<InformationLinkItemSVGProps>`
  height: 1.5rem;
  width: 1.5rem;
    fill: ${props => {
        if(props.fill !== undefined) return props.fill;
        if(props.type === "github") return props.theme.PageMain.GithubColor;
        if(props.type === "linkedin") return props.theme.PageMain.LinkedinColor;
        return "#000"
    }};
`;
const InformationData = styled("div")`
  display: flex;
  align-items: start;
  flex: 0 0 50%;
  padding-left: 1.875rem;
  @media only screen and (max-width: 991px) {
    padding-left: 0;
    padding-top: 1.875rem;
  }
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    padding-top: 1.5rem;
  }
`;
const InformationDataItem = styled("div")`
  list-style: none;
  margin-bottom: 0;
  width: 100%;
  margin-top: 0;
  @media (max-width: 991px) {
    padding: 0;
    text-align: center;
  }
`;
type InformationDataDetailProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const InformationDataDetail = styled.div<InformationDataDetailProps>`
  color: ${props => props.theme.PageMain.EmailColor};
  margin-bottom: 1rem;
  word-break: break-all;
`;
type InformationDataDetailTitleProps = {
    children: React.ReactNode;
    theme?: ThemeMode;
}
const InformationDataDetailTitle = styled.span<InformationDataDetailTitleProps>`
  color: ${props => props.theme.PageMain.EmailTitleColor};
  font-size: 0.75rem;
  display: block;
  text-transform: uppercase;
`;

export default function Index() {
    return (
        <>
            <Main>
                <Switch/>
                <Section>
                    <Header>
                        <Profile>
                            <ProfileBox>
                                <ImagePeople src="/images/main-photo.svg" alt="Gilang Adi Sasongko"/>
                                <SoundBar/>
                            </ProfileBox>
                            <Information>
                                <InformationName>Gilang Adi Sasongko</InformationName>
                                <InformationJob>
                                    <Typewriter options={{strings: ['Software Engineer!', 'Golang, PHP, Elixir, NodeJS, Flutter'], autoStart: true, loop: true}}/>
                                </InformationJob>
                                <InformationLink>
                                    <InformationLinkItem>
                                        <InformationLinkLink href="https://www.linkedin.com/in/gilangas/">
                                            <InformationLinkItemSVG type="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="240px" height="240px"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></InformationLinkItemSVG>
                                        </InformationLinkLink>
                                    </InformationLinkItem>
                                    <InformationLinkItem>
                                        <InformationLinkLink href="https://github.com/gilang-as">
                                            <InformationLinkItemSVG type="github" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="240px" height="240px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></InformationLinkItemSVG>
                                        </InformationLinkLink>
                                    </InformationLinkItem>
                                </InformationLink>
                            </Information>
                        </Profile>
                        <InformationData>
                            <InformationDataItem>
                                <InformationDataDetail><InformationDataDetailTitle>Email</InformationDataDetailTitle>me@gilang.dev</InformationDataDetail>
                                {/*<InformationDataDetail><InformationDataDetailTitle>Phone</InformationDataDetailTitle>+1 (070) 123–8459</InformationDataDetail>*/}
                            </InformationDataItem>
                            <InformationDataItem>
                                {/*<InformationDataDetail><InformationDataDetailTitle>Birthday</InformationDataDetailTitle>17 March, 1995</InformationDataDetail>*/}
                                <InformationDataDetail><InformationDataDetailTitle>Location</InformationDataDetailTitle>Jakarta, Indonesia</InformationDataDetail>
                            </InformationDataItem>
                        </InformationData>
                    </Header>
                </Section>
            </Main>
        </>
    );
}