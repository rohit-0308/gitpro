import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>
          Git<span>Pro</span>
        </Title>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: #161b22;
  z-index: 999px;
`;

const Title = styled.div`
  span {
    color: #3fb950;
  }
`;
