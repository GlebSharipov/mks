import React, { useState } from "react";
import styled from "styled-components";
import { cards } from "../utils/mock";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "800px",
    height: "800px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Objects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cardId, setCardId] = useState();

  function openModal(id) {
    setCardId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Root>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Title>{cards[cardId]?.title}</Title>

        <Container>
          <Img $src={cards[cardId]?.img} />
        </Container>

        <Title>Выполненные работы:</Title>

        <Description>
          <Text>{cards[cardId]?.description}</Text>
        </Description>
      </Modal>

      {cards.map((card) => (
        <Card onClick={() => openModal(card.id)} key={card.id}>
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

const Container = styled.div`
  max-width: 380px;
  padding-left: 5px;
  padding-top: 10px;
`;

const Description = styled.div`
  padding: 5px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #7a8999;
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
  height: 250px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  padding-left: 5px;
  padding-bottom: 5px;
`;

export default Objects;
