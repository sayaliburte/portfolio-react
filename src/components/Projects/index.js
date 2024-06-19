import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    padding: 70px 0px;
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

  const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
   


  `;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Mentioned below are some of my projects</Desc>
      </Wrapper>
      <CardContainer>
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
