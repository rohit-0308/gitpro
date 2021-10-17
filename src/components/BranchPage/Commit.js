import React from "react";
import styled from "styled-components";

const Commit = ({ author, date, message, avatar }) => {
  return (
    <>
      <CommitWrapper>
        <h3 style={{ margin: "0" }}>{date.slice(0, 10)}</h3>
        <p style={{ margin: "0", fontSize: "14px" }}>{message}</p>
        <UserWrapper>
          <Avatar src={avatar} alt="avatar"></Avatar>
          <h4 style={{ margin: "0 15px" }}>{author}</h4>
        </UserWrapper>
      </CommitWrapper>
    </>
  );
};

export default Commit;

const CommitWrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
`;

const UserWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: white;
`;
