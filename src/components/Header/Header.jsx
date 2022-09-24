import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { COLORS } from "../../assets/colors";

export const Header = () => {
  return (
    <Root>
      <Link to="/">
        <Logo />
      </Link>

      <Navigation>
        <Link to="/">
          <Title>Главная</Title>
        </Link>

        <Link to="/about-us">
          <Title>О нас</Title>
        </Link>

        <Link to="/services">
          <Title>Услуги</Title>
        </Link>

        <Link to="/objects">
          <Title>Объекты</Title>
        </Link>

        <Link to="/contacts">
          <Title>Контакты</Title>
        </Link>
      </Navigation>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  max-width: 1440px;
  width: 100%;
  border-bottom: 10px solid ${COLORS.secondary};
  border-top: 10px solid ${COLORS.secondary};
`;

const Logo = styled.img.attrs({ src: logo })`
  width: 170px;
  height: 105px;
`;

const Navigation = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 35px 5px;
`;

const Title = styled.li`
  font-size: 30px;
  border-bottom: 4px solid #ffffff;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid ${COLORS.secondary};
    color: ${COLORS.secondary};
  }
`;
