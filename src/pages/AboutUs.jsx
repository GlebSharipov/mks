import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../assets/colors";

function AboutUs() {
  return (
    <Root>
      <AboutCompany>
        <Title>ООО «МКС»</Title>
        <Text>
          ООО «МКС» - Cтроительно-монтажная фирма, развивающая свою
          деятельность, постоянно приобретая опыт и новые знания. Целью
          деятельности нашей фирмы является обеспечение заказчика
          высококачественными услугами обще строительного и инженерного
          характера, с использованием Современных технологий и полностью
          удовлетворяющих его потребности.
        </Text>

        <Text>
          Мы нацелены на долгосрочные партнерские отношения с заказчиком, всегда
          учитываем специфику его бизнеса и по праву гордимся всеми
          реализованными проектами и работами. Выполняя требования конкретного
          заказчика, мы воплощаем в жизнь самые современные проекты.
        </Text>
      </AboutCompany>

      <Directions>
        <TitleDirection>Направления</TitleDirection>

        <Link to={"/services"}>
          <TypeOfWork>- Вентиляция и кондиционирование.</TypeOfWork>
        </Link>
        <Link to={"/services"}>
          <TypeOfWork>- Отопление.</TypeOfWork>
        </Link>
        <Link to={"/services"}>
          <TypeOfWork>- Водоснабжение и водоотведение.</TypeOfWork>
        </Link>
        <Link to={"/services"}>
          <TypeOfWork>- Электрика.</TypeOfWork>
        </Link>
        <Link to={"/services"}>
          <TypeOfWork>- Пожаро-охранная сигнализация.</TypeOfWork>
        </Link>
        <Link to={"/services"}>
          <TypeOfWork>- Видеонаблюдение.</TypeOfWork>
        </Link>
      </Directions>

      <Activity>
        <Title>Деятельность</Title>
        <Text>
          Инженерное обеспечение всех видов объектов и сооружений – основной вид
          деятельности компании, включающий проектирование инженерных систем,
          поставку и монтаж материалов и оборудования, пуско-наладочные работы,
          ввод в эксплуатацию инженерных систем.
        </Text>
        <Text>
          Использование современных и качественных материалов, оборудования и
          средств механизации в сочетании с высокой культурой выполнения работ
          нашими сотрудниками – формула успеха, из-за которой уже не один
          десяток лет клиенты самого разного профиля хотят видеть на своих
          объектах именно ООО "МКС".
        </Text>

        <Text>
          Качественное выполнение работ в договорные сроки, ответственное
          соблюдение остальных договорных обязательств, использование новейших
          технологий в области строительства, следование всем предписаниям
          российского законодательства в области строительства, тесное и
          профессиональное взаимодействие с Заказчиком – вот те задачи, которые
          мы ставим перед собой и которыми руководствуются наши сотрудники и
          специалисты.
        </Text>
      </Activity>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const AboutCompany = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  margin-bottom: 15px;
  color: #7a8999;
`;

const Directions = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TitleDirection = styled.li`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const TypeOfWork = styled.li`
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  color: #7a8999;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Activity = styled.div`
  max-width: 800px;
  margin-bottom: 30px;
`;

export default AboutUs;
