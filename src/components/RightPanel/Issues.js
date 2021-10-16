import React from "react";
import styled from "styled-components";

const Issues = () => {
  return (
    <>
      <IssueWrapper>
        <h4 style={{ margin: "0" }}>issues</h4>
      </IssueWrapper>
    </>
  );
};

export default Issues;

const IssueWrapper = styled.div`
  height: 50px;
  width: full;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  cursor: pointer;
`;
