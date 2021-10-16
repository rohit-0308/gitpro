import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <>
      <HeaderWrapper>
        <BackButton>
          <AiOutlineArrowLeft onClick={handleBack} />
        </BackButton>
        <TitleWrapper>
          <Title>
            <span>Commits:</span> Branch Name
          </Title>
        </TitleWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: #161b22;
  z-index: 999px;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  span {
    color: #3fb950;
  }
`;
