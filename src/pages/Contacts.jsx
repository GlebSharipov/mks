import React from "react";
import styled from "styled-components";
import email from "../assets/img/email.png";
import phone from "../assets/img/phone.png";

function Contacts() {
  return (
    <Root>
      <Information>
        <Title>ООО «МКС»</Title>

        <Text>
          ИНН 7811746018 <br /> КПП 780201001 <br /> ОГРН 1207800038676 <br />
          ОКПО 43816108
        </Text>

        <Text>
          Банковские реквизиты: <br /> р/с 40702810355000060250 <br />
          Северо-Западный Банк ПАО Сбербанк <br /> БИК 044030653 <br /> к/с
          30101810500000000653
        </Text>

        <Text>
          Адрес: 194363, Россия, г. Санкт-Петербург, <br /> п. Парголово, ул.
          Меркурьева, д.7, стр. 1, пом. 63-Н, офис 5.
        </Text>

        <Text>
          Организация является членом Ассоциации СРО «МОСК».
          <br /> Регистрационный номер: СРО-С-180-20012010
        </Text>

        <Text>
          Лицензия МЧС.
          <br /> Регистрационный номер: 78-06-2023-002421
          (Л014-00101-78/00659877)
        </Text>

        <PhoneNumber>
          <PhoneImg /> +7(812)920-88-68
        </PhoneNumber>

        <Email>
          <EmailImg />
          <a href="mailto:info@mkssro.ru">Email: info@mkssro.ru</a>
        </Email>
      </Information>
    </Root>
  );
}

const Root = styled.div`
  padding: 20px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: #7a8999;
`;

const PhoneImg = styled.img.attrs({ src: phone })`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const PhoneNumber = styled.div`
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

const Email = styled.div`
  display: flex;
  align-items: center;
`;

export default Contacts;
