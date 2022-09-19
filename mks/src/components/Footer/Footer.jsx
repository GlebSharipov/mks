import React from "react";
import styled from "styled-components";
import { COLORS } from "../../assets/colors";
import email from "../../assets/img/email.png";
import phone from "../../assets/img/phone.png";

export const Footer = () => {
  return (
    <Root>
      <ContactInformation>
        <Address>
          192076, г. Санкт-Петербург, пр-кт Рыбацкий, д. 18, корп.2 лит. А
        </Address>

        <PhoneNumber>
          <PhoneImg /> +7(911)820-68-68
        </PhoneNumber>

        <Email>
          <EmailImg />
          <a href="mailto:mkssro@mail.ru">mkssro@mail.ru</a>
        </Email>
      </ContactInformation>

      <Director>
        Генеральный директор: <br /> Борзенков Игорь Владиславович
      </Director>
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
`;

const Address = styled.li`
  margin-bottom: 10px;
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

const Director = styled.div`
  line-height: 40px;
  font-size: 18px;
`;
