import styled from "styled-components";


const Card = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  gap: 14px;

  &:hover {
    tranform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgbs(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
    @media (max-width:321px){
     width: 290px;
    }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  // white-space:nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  font-size: 20px;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.span`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Description = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;

  max-width: 100%;

  text-align: center;
  font-size: 14px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Title>{project.name}</Title>
      <Tags>
        {project.skills.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Description>{project.desc}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCard;
