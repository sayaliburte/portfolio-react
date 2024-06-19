import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 14px;
  overflow:hidden;
  transition:all 0.3s ease-in-out;

  &:hover {
    box-shadow:0px 0px 20px rgba(0,0,0,0.2);
    transform:translateY(-10px);
  }

  @media only screen and (min-width: 375px) and (max-width: 430px) {
	padding:10px;
    gap:10px;
    width:300px;
   
}
   @media only screen and (min-width: 600px) and (max-width: 768px){
   padding:10px;
    gap:8px;
    width:500px;
   }

    @media (max-width:321px){
    padding:10px;
    gap:8px;
    width:240px;
  }
  border:0.1px solid #306ee8;
  box-shadow:rgba(23.92,230,0.15) 0px;4px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const CompanyDetails = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Header>
        <Body>
          <Role>{experience.role}</Role>
          <CompanyDetails>{experience.company}</CompanyDetails>
          <Duration>{experience.date}</Duration>
        </Body>
      </Header>
      <Description>
        {experience.desc}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience.skills.map((skill) => (
                  <Skill>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </Card>
  );
};

export default ExperienceCard;
