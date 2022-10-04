import React from "react";
import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import email from "../../assets/img/email.png";
import phone from "../../assets/img/phone.png";

export const Footer = () => {
  return (
    <Root>
      <ContactInformation>
        <PhoneNumber>
          <PhoneImg /> +7(812)920-88-68
        </PhoneNumber>

        <Email>
          <EmailImg />
          <a href="mailto:mkssro@mail.ru">info@mkssro.ru</a>
        </Email>
      </ContactInformation>

      <Address>г. Санкт-Петербург</Address>
    </Root>
  );
};

const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${COLORS.secondary};
`;

const ContactInformation = styled.ul`
  font-size: 18px;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Address = styled.div`
  margin-bottom: 10px;
  padding-left: 3px;
`;

const PhoneImg = styled.img.attrs({ src: phone })`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const PhoneNumber = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 3px;
`;

const EmailImg = styled.img.attrs({ src: email })`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

const Email = styled.li`
  display: flex;
  align-items: center;
`;
