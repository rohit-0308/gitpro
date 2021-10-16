import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CommitBody from "./CommitBody";

const BranchPage = () => {
  return (
    <PageWrapper>
      <Header />
      <CommitBody />
    </PageWrapper>
  );
};

export default BranchPage;

const PageWrapper = styled.div`
  overflow: hidden;
`;
