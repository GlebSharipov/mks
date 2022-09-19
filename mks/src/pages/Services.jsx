import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { jobs, description } from "../utils/mock";

import design from "../assets/img/services/design.jpg";
import complete from "../assets/img/services/complete_set_of_the_object.jpg";
import installationWork from "../assets/img/services/installation_work.jpg";
import commissioningWorks from "../assets/img/services/commissioning_works.jpg";
import serviceAndRepair from "../assets/img/services/service_and_repair.jpg";

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
              {job.text}
            </Job>
          ))}
        </TypesJobs>

        <JobDescription>
          <Title>{description[id].title}</Title>
          <List>
            {description[id].item.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </List>
        </JobDescription>
      </Container>

      <StagesOfWork>
        <Stage>
          <Description>
            Проектный отдел компании разрабатывает полный комплект документов
            стадии П и РД мультизональных систем кондиционирования, систем
            чиллер-фанкойлов, прецизионного кондиционирования, "чистых
            помещений" и пр. Опыт и квалификация специалистов позволяет решать
            задачи для зданий и помещений различного назначения - торговых,
            развлекательных и офисных центров, объектов промышленности, объектов
            здравоохранения, химических производств, предприятий общественного
            питания и др.
          </Description>
          <StageImg $src={design} />
        </Stage>

        <Stage>
          <StageImg $src={complete} />
          <Description>
            Оперативность комплектации объекта обспечивается нами благодаря
            собственным складским запасам основных коммуникаций и узлов систем
            кондиционирования. Это дает возможность начинать производство
            монтажных работ уже фактически на следующий день после достижения
            договоренностей. Срок поставки оборудования как правило зависит от
            типа и производительности системы и составляет до 8 недель, но в
            случае необходимости можно подобрать аналогичное по качеству и
            техническим характеристикам оборудование, которое будет в наличии.
            Такая гибкость обеспечивается за счет высокой квалификации
            технических специалистов, осуществляющих переподбор оборудования, а
            также многолетних партнерских отношений с более чем 60
            заводами-изготовителями.
          </Description>
        </Stage>

        <Stage>
          <Description>
            Монтаж систем кондиционирования выполняется штатными
            высококвалифицированными специалистами с применением современных
            инструментов и спецтехники. Контроль качества выполнения работ
            осуществляется на каждом этапе - от прокладки коммуникаций и
            азотирования трасс до монтажа оборудования. Мы обеспечиваем
            минимальные сроки выполнения работ за счет высокой скорости
            комплектации материалами и оборудованием, регулярного контроля
            календарного графика, высокой производительности труда, а также
            возможностью производства работ в несколько смен 24/7. От качества
            монтажа систем кондиционирования напрямую зависит как
            производительность системы, так и срок ее службы. Соблюдение
            горизонтальных и вертикальных плоскостей, корректное расположение
            рефнет-разветвителей и коллекторов, размещение разъемных соединений,
            дренажные системы с сухими запахозапирающими устройствами - эти и
            многие другие нюансы напрямую влияют на работоспособность системы.
          </Description>
          <StageImg $src={installationWork} />
        </Stage>

        <Stage>
          <StageImg $src={commissioningWorks} />
          <Description>
            От выполенных работы по пусконаладке систем кондиционирования
            напрямую зависит как производительность системы, так и ее срок
            службы. Гидравлические и динамометрические испытания на
            герметичность, азотирование, пролив дренажной системы, протяжка
            электрических и сигнальных подсоединений, программирование, замеры
            параметров работы системы, инструктаж по эксплуатации системы- все
            эти нюансы оказывают прямое влияние на корректную работу системы
            кондиционирования.
          </Description>
        </Stage>

        <Stage>
          <Description>
            Частота сервисного обслуживания системы кондиционирования
            регламентирована заводами-производителями оборудования и также
            зависит от активности эксплуатации оборудования. Выход систем из
            строя в 97% случаях происходит по причине либо недостаточного либо
            некачественно произведенного сервисного обслуживания. Мы предлагаем
            каждому нашему клиенту обслуживание по индивидуально разработанной
            программе в целях оптимизации затрат на эксплуатацию систем.
            Специалисты сервисного центра работают 24 часа в сутки 7 дней в
            неделю.
          </Description>
          <StageImg $src={serviceAndRepair} />
        </Stage>
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
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
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
