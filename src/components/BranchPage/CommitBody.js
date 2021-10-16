import React from "react";
import Commit from "./Commit";
import styled from "styled-components";

const CommitBody = () => {
  return (
    <>
      <CommitsWrapper>
        <CommitContent>
          <Commit />
          <Commit />
          <Commit />
          <Commit />
          <Commit />
          <Commit />
          <Commit />
          <Commit />
          <Commit />
        </CommitContent>
      </CommitsWrapper>
    </>
  );
};

export default CommitBody;

const CommitsWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const CommitContent = styled.div`
  height: 85vh;
  width: 60%;
  margin-top: 5vh;
  border-top: 1px solid rgba(240, 246, 252, 0.1);
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  border-left: 1px solid rgba(240, 246, 252, 0.1);
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
