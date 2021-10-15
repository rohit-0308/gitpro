import React from "react";
import styled from "styled-components";

const Repo = () => {
  return (
    <>
      <SingleRepo>
        <h2 style={{ margin: "0" }}>Repository Name</h2>
        <p style={{ margin: "0" }}>Repository Description</p>
      </SingleRepo>
    </>
  );
};

export default Repo;

const SingleRepo = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  height: auto;
`;
