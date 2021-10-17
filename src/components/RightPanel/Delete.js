import React from "react";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

const Delete = () => {
  return (
    <>
      <DeleteWrapper>
        <button>
          Delete
          <AiFillDelete style={{ marginLeft: "8px" }} />
        </button>
      </DeleteWrapper>
    </>
  );
};

export default Delete;

const DeleteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: 5%;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: #c9d1d9;
    /* width: auto; */
    height: 30px;
    border: 1px solid rgba(240, 246, 252, 0.1);
    border-radius: 5px;
    background-color: #21262d;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 0;
  }

  button:hover {
    border: 1px solid red;
    border-radius: 5px;
    color: red;
  }
`;
