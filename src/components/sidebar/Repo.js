import React from "react";
import styled from "styled-components";
import { getRepoBranches } from "../../Services/main";

const Repo = ({ id, username, name, desc }) => {
  return (
    <>
      <SingleRepo key={id} onClick={() => getRepoBranches(username, name)}>
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
  cursor: pointer;
`;
