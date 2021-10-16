import React from "react";
import styled from "styled-components";

const Issues = ({ title, author, avatar }) => {
  return (
    <>
      <IssueWrapper>
        <Title>{title}</Title>
        <Author>
          <img src={avatar} alt="avatar" />
          <p>{author}</p>
        </Author>
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
`;

const Title = styled.h3`
  margin: 0;
`;

const Author = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  p {
    margin: 0;
    padding-left: 10px;
  }
`;
