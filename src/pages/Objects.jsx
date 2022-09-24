import React, { useState } from "react";
import styled from "styled-components";
import { cards } from "../utils/mock";
import Modal from "react-modal";
import cross from "../assets/img/cross.png";

const customStyles = {
  content: {
    width: "800px",

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
        <TopPart>
          <Title>{cards[cardId]?.title}</Title>

          <CloseButton onClick={closeModal}>
            <CrossIcon $src={cross} />
          </CloseButton>
        </TopPart>

        <Container>
          <ModalImg $src={cards[cardId]?.img} />
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

const TopPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.div`
  padding: 5px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const CloseButton = styled.button`
  border-radius: 50%;
  border: none;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Card = styled.div`
  cursor: pointer;
  max-width: 375px;
  width: 100%;
  margin-bottom: 25px;
`;

const Img = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  height: 250px;
  margin-bottom: 10px;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

const ModalImg = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  width: 500px;
  height: 300px;
  margin-bottom: 10px;
`;

const CrossIcon = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  width: 20px;
  height: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  padding-left: 5px;
  padding-bottom: 5px;
`;

export default Objects;
