import React from "react";
import styled from "styled-components";
import background from "../assets/img/background/background.jpg";
import { jobs } from "../utils/mock";
import { COLORS } from "../assets/colors";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Root>
      <Directions>
        <Container>
          {jobs.map((job) => (
            <Link key={job.id} to={"/services"}>
              <Card>{job.text} </Card>
            </Link>
          ))}
        </Container>
      </Directions>

      <Description>
        ООО «МКС» - Cтроительно-монтажная фирма, развивающая свою деятельность,
        постоянно приобретая опыт и новые знания. Целью деятельности нашей фирмы
        является обеспечение заказчика высококачественными услугами обще
        строительного и инженерного характера, с использованием современных
        технологий и полностью удовлетворяющих его потребности.
      </Description>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Directions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background});
  width: 100%;
  min-height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
`;

const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 340px;
  min-height: 100px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  margin-bottom: 15px;

  background-color: ${COLORS.secondary};

  &:hover {
    background-color: rgba(66, 164, 234, 0.9);
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

const Description = styled.div`
  max-width: 1000px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 420px) {
    padding: 0 5px;
  }
`;

export default Home;
