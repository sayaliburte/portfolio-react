import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../images/Sayali Profile Pic.jpeg";
import HeroBgAnimation from "../HeroBgAnimation/index";
const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 90px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;

  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top:60%;
  left:50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 10px 0px;
  }
`;

const HeroContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const ProfileSummaryContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const ProfilePhotoContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap:12px;
  @media screen and (max-width:960px) {
    order: 1;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    margin-bottom:80px;
  }
  @media screen and(max-width:640px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 30px;
    line-height: 50px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const Summary = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
export const ResumeContainer = styled.div`
  display: flex;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 100%;
    max-width: 200px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 16px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media screen and (max-width: 640px) {
        padding: 12px 12px;
        font-size: 14px;
        
    } 

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-bottom: 5px solid ${({ theme }) => theme.primary};
  
   @media screen and (max-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }

  @media screen and (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const HeroSection = () => {
  return (
    <HeroContainer id='about'>
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroContentContainer>
        <ProfileSummaryContainer>
          <Title>
            Hello, I am <br />
            {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          {<Summary>{Bio.description}</Summary>}
          <ResumeContainer>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </ResumeContainer>
        </ProfileSummaryContainer>
        <ProfilePhotoContainer>
          <Image src={ProfilePic} alt="Hero" />
        </ProfilePhotoContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
