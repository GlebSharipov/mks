import React, { FC, useState } from "react";
import styled from "styled-components";
import burger from "../../assets/img/burger.png";
import cross from "../../assets/img/cross.png";

import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../assets/colors";

export const BurgerMenu = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const location = useLocation().pathname;

  const handleVisibleMenu = () => {
    setVisibleMenu((prevState) => !prevState);
  };

  return (
    <Root>
      {visibleMenu ? (
        <>
          <Overlay onClick={handleVisibleMenu} />

          <Menu>
            <ContainerButton>
              <ButtonBurger onClick={handleVisibleMenu}>
                <CrossIcon />
              </ButtonBurger>
            </ContainerButton>

            <Link to="/">
              <Title $isActive={location === "/"} onClick={handleVisibleMenu}>
                Главная
              </Title>
            </Link>
            <Link to="/about-us">
              <Title
                $isActive={location === "/about-us"}
                onClick={handleVisibleMenu}
              >
                О нас
              </Title>
            </Link>
            <Link to="/services">
              <Title
                $isActive={location === "/services"}
                onClick={handleVisibleMenu}
              >
                Услуги
              </Title>
            </Link>
            <Link to="/objects">
              <Title
                $isActive={location === "/objects"}
                onClick={handleVisibleMenu}
              >
                Объекты
              </Title>
            </Link>
            <Link to="/contacts">
              <Title
                $isActive={location === "/contacts"}
                onClick={handleVisibleMenu}
              >
                Контакты
              </Title>
            </Link>
          </Menu>
        </>
      ) : (
        <ButtonBurger onClick={handleVisibleMenu}>
          <BurgerIcon />
        </ButtonBurger>
      )}
    </Root>
  );
};

const Root = styled.div`
  max-width: 280px;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

const Title = styled.li`
  font-size: 25px;
  margin-bottom: 15px;
  border-bottom: 4px solid #ffffff;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? COLORS.secondary : null)};
  &:hover {
    border-bottom: 4px solid ${COLORS.secondary};
    color: ${COLORS.secondary};
  }
`;

const BurgerIcon = styled.img.attrs({ src: burger })`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

const CrossIcon = styled.img.attrs({ src: cross })`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

const Overlay = styled.div`
  z-index: 20;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  position: fixed;
`;

const Button = styled.button`
  cursor: pointer;
  width: 24px;
  &:hover {
    border-radius: 50%;
  }
`;

const ButtonBurger = styled.button`
  cursor: pointer;
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;

const Menu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  top: 0;
  right: -10px;
  z-index: 30;
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  padding: 35px 24px 0px 24px;
  animation-duration: 0.5s;
  animation-name: fadeInDown;
  position: fixed;

  @keyframes fadeInDown {
    0% {
      transform: ${({ $isVisible }) =>
        $isVisible ? "translate(0)" : "translate(100%)"};
    }
    100% {
      transform: none;
    }
  }
`;

const LogogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
