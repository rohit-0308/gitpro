import React from "react";
import styled from "styled-components";

const Commit = () => {
  return (
    <>
      <CommitWrapper>
        <h3 style={{ margin: "0" }}>10 Mar 2021</h3>
        <p style={{ margin: "0", fontSize: "14px" }}>
          Commit Message Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nostrum excepturi recusandae expedita veritatis iusto tenetur!
        </p>
        <UserWrapper>
          <Avatar></Avatar>
          <h4 style={{ margin: "0 15px" }}>UserName</h4>
        </UserWrapper>
      </CommitWrapper>
    </>
  );
};

export default Commit;

const CommitWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
`;

const UserWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: white;
`;
