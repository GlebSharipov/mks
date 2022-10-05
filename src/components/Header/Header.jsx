import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BurgerMenu } from "../../components";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { COLORS } from "../../assets/colors";

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <Root>
      <Link to="/">
        <Logo />
      </Link>

      <Navigation>
        <Link to="/">
          <Title $isActive={location === "/"}>Главная</Title>
        </Link>

        <Link to="/about-us">
          <Title $isActive={location === "/about-us"}>О нас</Title>
        </Link>

        <Link to="/services">
          <Title $isActive={location === "/services"}>Услуги</Title>
        </Link>

        <Link to="/objects">
          <Title $isActive={location === "/objects"}>Объекты</Title>
        </Link>

        <Link to="/contacts">
          <Title $isActive={location === "/contacts"}>Контакты</Title>
        </Link>
      </Navigation>

      <BurgerMenu />
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

  @media (max-width: 900px) {
    padding: 10px 20px;
    justify-content: space-between;
  }
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

  @media (max-width: 720px) {
    display: none;
  }
`;

const Title = styled.li`
  font-size: 30px;
  border-bottom: 4px solid #ffffff;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? COLORS.secondary : null)};

  &:hover {
    border-bottom: 4px solid ${COLORS.secondary};
    color: ${COLORS.secondary};
  }

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
