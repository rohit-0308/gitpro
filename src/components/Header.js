import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <SideBarMenu>
          <AiOutlineMenu />
        </SideBarMenu>
        <TitleWrapper>
          <Title>
            Git<span>Pro</span>
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

const SideBarMenu = styled.div`
  display: none;

  @media only screen and (max-width: 786px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
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
