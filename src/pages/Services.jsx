import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { jobs, description } from "../utils/mock";

function Services() {
  const [id, setId] = useState(0);

  const handleClickJob = (id) => {
    setId(id);
  };

  return (
    <Root>
      <Container>
        <TypesJobs>
          {jobs.map((job) => (
            <Job onClick={() => handleClickJob(job.id)} key={job.id}>
              {job.text.toUpperCase()}
            </Job>
          ))}
        </TypesJobs>

        <JobDescription>
          <Title>{description[id].title.toUpperCase()}</Title>
          <List>
            {description[id].item.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </List>
        </JobDescription>
      </Container>

      <StagesOfWork>
        {description[id].data.map((obj, index) => (
          <Stage key={index}>
            {index % 2 ? (
              <>
                <StageImg $src={obj.img} />
                <Description>{obj.text}</Description>
              </>
            ) : (
              <>
                <Description>{obj.text}</Description>
                <StageImg $src={obj.img} />
              </>
            )}
          </Stage>
        ))}
      </StagesOfWork>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;

  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

const List = styled.ul`
  color: #7a8999;
`;

const Item = styled.li`
  margin-bottom: 10px;
`;

const JobDescription = styled.div`
  flex-grow: 1;
`;

const TypesJobs = styled.ul`
  max-width: 250px;
  min-height: 300px;
  padding: 10px;
  background-color: ${COLORS.secondary};
  margin-right: 50px;

  @media (max-width: 600px) {
    max-width: 400px;
    margin: 0;
    margin-bottom: 15px;
    text-align: center;
  }
`;

const Job = styled.li`
  font-size: 16px;
  border-bottom: 2px solid rgba(97, 94, 94, 0);
  margin-bottom: 15px;
  color: #ffffff;
  cursor: pointer;
  line-height: 25px;

  &:hover {
    border-bottom: 2px solid ${COLORS.secondary};
  }
`;

const StagesOfWork = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stage = styled.li`
  max-width: 1150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  color: #7a8999;
  line-height: 25px;
  padding: 15px;
  border-radius: 15px;
  max-width: 600px;
  min-height: 280px;
  background-color: rgba(97, 94, 94, 0.1);
`;

const StageImg = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  max-width: 500px;
  min-height: 280px;
`;

export default Services;
