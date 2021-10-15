import React from "react";
import styled from "styled-components";

const Repo = ({ id, name, desc }) => {
  return (
    <>
      <SingleRepo key={id}>
        <h2 style={{ margin: "0" }}>{name}</h2>
        <p style={{ margin: "0" }}>{desc}</p>
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
