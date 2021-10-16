import React from "react";
import Delete from "./Delete";
import SingleRepoBody from "./SingleRepoBody";

import styled from "styled-components";

const Body = () => {
  return (
    <>
      <BodyWrapper>
        <Delete />
        <SingleRepoBody />
      </BodyWrapper>
    </>
  );
};

export default Body;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 15px;
  border: 1px solid rgba(240, 246, 252, 0.4);
  border-radius: 20px;
`;
