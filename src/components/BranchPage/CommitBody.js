import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Commit from "./Commit";
import styled from "styled-components";

const CommitBody = () => {
  const params = useParams();
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${params.username}/${params.name}/commits`
      )
      .then((res) => {
        setCommits(res.data);
      });
  }, [params.sha]);

  console.log(commits);
  return (
    <>
      <CommitsWrapper>
        <CommitContent>
          {commits.map((commit) => {
            return (
              <Commit
                date={commit.commit.author.date}
                author={commit.commit.author.name}
                message={commit.commit.message}
                avatar={commit.author.avatar_url}
              />
            );
          })}
        </CommitContent>
      </CommitsWrapper>
    </>
  );
};

export default CommitBody;

const CommitsWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const CommitContent = styled.div`
  height: 85vh;
  width: 60%;
  margin-top: 5vh;
  border-top: 1px solid rgba(240, 246, 252, 0.1);
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  border-left: 1px solid rgba(240, 246, 252, 0.1);
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
