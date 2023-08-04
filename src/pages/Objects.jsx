import React, { useState } from "react";
import styled from "styled-components";
import { cards } from "../utils/mock";
import Modal from "react-modal";
import cross from "../assets/img/cross.png";
import { COLORS } from "../assets/colors";

const customStyles = {
  content: {
    maxWidth: "800px",
    width: "100%",
    maxHeight: "80vh",
    overflow: "auto",
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
  const [imgId, setImgId] = useState(0);

  const [isOpenArchive, setIsOpenArchive] = useState(false);

  function openModal(id) {
    setCardId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setImgId(0);
  }

  const handleOpenArchive = () => {
    if (isOpenArchive) {
      setIsOpenArchive(false);
    } else {
      setIsOpenArchive(true);
    }
  };

  const handleOpenImg = (index) => {
    setImgId(index);
  };

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

        <ModalImg $src={cards[cardId]?.img[imgId]} />

        <ContainerImg>
          {cards[cardId]?.img.map((img, index) => (
            <ExtraImg
              key={index}
              onClick={() => handleOpenImg(index)}
              $src={img}
            />
          ))}
        </ContainerImg>

        <Title>Выполненные работы:</Title>

        <Description>
          {cards[cardId]?.description.map((text, index) => (
            <Text key={index}>- {text}</Text>
          ))}
        </Description>
      </Modal>

      <CardContainer>
        {isOpenArchive
          ? cards.map((card) => (
              <Card key={card.id}>
                <Img $src={card.img[0]} onClick={() => openModal(card.id)} />
                <Title>{card.title}</Title>
              </Card>
            ))
          : cards.slice(0, 5).map((card) => (
              <Card key={card.id}>
                <Img $src={card.img[0]} onClick={() => openModal(card.id)} />
                <Title>{card.title}</Title>
              </Card>
            ))}
      </CardContainer>

      <ButtonArchive onClick={handleOpenArchive}>
        {isOpenArchive ? "Закрыть Архив" : "Открыть Архив"}
      </ButtonArchive>
    </Root>
  );
}

const Root = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 475px) {
    padding: 10px;
  }
`;

const ExtraImg = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  cursor: pointer;
  width: 85px;
  height: 85px;
  margin-right: 10px;
`;

const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow-x: auto;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonArchive = styled.button`
  padding: 10px;
  border-radius: 12px;
  font-size: 16px;
  background-color: ${COLORS.secondary};

  &:hover {
    background-color: rgba(66, 164, 234, 0.9);
  }
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
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-top: 5px;
`;

const CloseButton = styled.button`
  border-radius: 50%;
  border: none;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Card = styled.div`
  max-width: 375px;
  width: 100%;
  margin-bottom: 25px;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Img = styled.img.attrs((props) => ({
  src: props.$src,
}))`
  cursor: pointer;
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
  min-height: 300px;
  margin-bottom: 10px;

  @media (max-width: 400px) {
    font-size: 18px;
  }

  @media (max-width: 545px) {
    width: 100%;
  }
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

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export default Objects;
