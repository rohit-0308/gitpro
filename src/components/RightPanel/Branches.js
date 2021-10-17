import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Branches = ({ name, commit }) => {
  return (
    <>
      <Link to="commits" style={{ textDecoration: "none", color: "white" }}>
        <BranchWrapper>
          <h4 style={{ margin: "0" }}>{name} branch</h4>
        </BranchWrapper>
      </Link>
    </>
  );
};

export default Branches;

const BranchWrapper = styled.div`
  height: 50px;
  width: full;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  cursor: pointer;
`;
