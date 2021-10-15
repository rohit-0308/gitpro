import React, { useState } from "react";
import styled from "styled-components";
import Repo from "./Repo";

const SideBar = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SideBarWrapper>
        <SearchBar>
          <form>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Github User"
            />
            <button onClick={handleSubmit}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </SearchBar>
        <RepoLists>
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
        </RepoLists>
      </SideBarWrapper>
    </>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  min-width: 300px;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  /* background-color: aqua; */
`;

const SearchBar = styled.div`
  display: flex;
  padding: 10px;
  height: 5%;
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);

  form {
    display: flex;
    flex: 1;
  }

  input {
    flex: 1;
    border: none;
    background-color: #21262d;
    color: #c9d1d9;
    padding: 5px;
  }

  input:focus {
    outline: none;
  }

  button {
    display: flex;
    justify-content: center;
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
  }

  button:hover {
    border: 1px solid rgba(240, 246, 252, 0.8);
    border-radius: 5px;
  }
`;

const RepoLists = styled.div`
  height: 95%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;
