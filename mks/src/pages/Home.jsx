import React from "react";
import styled from "styled-components";
import background from "../assets/img/background/background.jpg";
import { COLORS } from "../assets/colors";
import { Link } from "react-router-dom";

import arena from "../assets/img/arena-1.jpeg";
import obi from "../assets/img/OBI-1.jpg";
import leroyMerlin from "../assets/img/lerua-merlen-1.jpg";

function Home() {
  return (
    <Root>
      <Directions>
        <Container>
          <Link to={"/services"}>
            <Card>ОТОПЛЕНИЕ </Card>
          </Link>
          <Link to={"/services"}>
            <Card>ВЕНТИЛЯЦИЯ И КОНДИЦИОНИРОВАНИЕ</Card>
          </Link>
          <Link to={"/services"}>
            <Card>ПОЖАРОТУШЕНИЕ</Card>
          </Link>
          <Link to={"/services"}>
            <Card>ВОДОПРОВОД И КАНАЛИЗАЦИЯ</Card>
          </Link>
          <Link to={"/services"}>
            <Card>ВИДЕОНАБЛЮДЕНИЕ</Card>
          </Link>
          <Link to={"/services"}>
            <Card>ЭЛЕКТРИКА</Card>
          </Link>
        </Container>
      </Directions>

      <Description>
        ООО «МКС» - Cтроительно-монтажная фирма, развивающая свою деятельность,
        постоянно приобретая опыт и новые знания. Целью деятельности нашей фирмы
        является обеспечение заказчика высококачественными услугами обще
        строительного и инженерного характера, с использованием Современных
        технологий и полностью удовлетворяющих его потребности.
      </Description>

      <Text>Проекты</Text>

      <Projects>
        <Object>
          <Link to="/objects">
            <Img $src={obi} />
            <Title>OBI</Title>
          </Link>
        </Object>
        <Object>
          <Link to="/objects">
            <Img $src={arena} />
            <Title>Арена Омск</Title>
          </Link>
        </Object>
        <Object>
          <Link to="/objects">
            <Img $src={leroyMerlin} />
            <Title>Leroy Merlin</Title>
          </Link>
        </Object>
      </Projects>
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

const Text = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
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
`;

const Card = styled.div`
  width: 340px;
  min-height: 100px;
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
`;

const Description = styled.div`
  max-width: 1000px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin-bottom: 30px;
`;

const Object = styled.div`
  max-width: 350px;
  margin-right: 30px;
  cursor: pointer;
`;

const Img = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  height: 260px;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
`;

export default Home;
