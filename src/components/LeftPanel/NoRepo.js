import React from "react";
import styled from "styled-components";

const NoRepo = () => {
  return (
    <Wrapper>
      No repository to show
      <span>Please enter a valid Github Username</span>
    </Wrapper>
  );
};

export default NoRepo;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  span {
    margin: 0;
    color: gray;
  }
`;
