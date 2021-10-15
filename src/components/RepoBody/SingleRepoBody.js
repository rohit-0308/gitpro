import React, { useState } from "react";
import styled from "styled-components";
import Branches from "./Branches";
import Issues from "./Issues";

const SingleRepoBody = () => {
  const [showBranches, setShowBranches] = useState(true);
  const [branches, setBranches] = useState([]);
  const [issues, setIssues] = useState([]);
  return (
    <>
      <BodyWrapper>
        <Buttons>
          <ButtonWrapper
            className="active"
            onClick={() => setShowBranches(true)}
          >
            Branches
          </ButtonWrapper>
          <ButtonWrapper onClick={() => setShowBranches(false)}>
            Issues
          </ButtonWrapper>
        </Buttons>
        <Wrapper>
          {showBranches
            ? branches.map((branch) => {
                return <Branches />;
              })
            : issues.map((issue) => {
                return <Issues />;
              })}
        </Wrapper>
      </BodyWrapper>
    </>
  );
};

export default SingleRepoBody;

const BodyWrapper = styled.div`
  height: 100%;
  margin: 15px;
`;

const Buttons = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  border: 1px solid rgba(240, 246, 252, 0.1);
  .active {
    border-bottom: 3px solid #3fb950;
    padding: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  border-left: 1px solid rgba(240, 246, 252, 0.1);
`;
