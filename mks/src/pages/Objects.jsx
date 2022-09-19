import React from "react";
import styled from "styled-components";
import { cards } from "../utils/mock";

function Objects() {
  return (
    <Root>
      {cards.map((card) => (
        <Card key={card.id}>
          <Img $src={card.img} />
          <Title>{card.title}</Title>
        </Card>
      ))}
    </Root>
  );
}

const Root = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  cursor: pointer;
  max-width: 375px;
  width: 100%;
  margin-bottom: 25px;

  &:hover {
    box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const Img = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  z-index: -1;
  height: 250px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  padding-left: 5px;
  padding-bottom: 5px;
`;

export default Objects;
