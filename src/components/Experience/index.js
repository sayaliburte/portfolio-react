import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding:60px 0px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size3: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;


const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc></Desc>
        
        <TimeLineSection>
          <Timeline >{experiences.map((experience,index)=>(
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary"></TimelineDot>
                
                  {index!==experiences.length-1 && <TimelineConnector />}
              
              </TimelineSeparator>
              <TimelineContent sx={{py:"12px",px:2}}>
                <ExperienceCard experience={experience} ></ExperienceCard>
              </TimelineContent>
            </TimelineItem>
          ))
}</Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
