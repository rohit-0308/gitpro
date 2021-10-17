import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Branches from "./Branches";
import Issues from "./Issues";

const SingleRepoBody = () => {
  const params = useParams();
  const [showBranches, setShowBranches] = useState(true);
  const [branches, setBranches] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${params.username}/${params.name}/issues`
      )
      .then((res) => {
        setIssues(res.data);
      });
  }, [params.name]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${params.username}/${params.name}/branches`
      )
      .then((res) => {
        setBranches(res.data);
      });
  }, [params.name]);

  return (
    <>
      <BodyWrapper>
        <Buttons>
          <ButtonWrapper
            className={showBranches ? "active" : ""}
            onClick={() => setShowBranches(true)}
          >
            Branches
          </ButtonWrapper>

          <ButtonWrapper
            className={showBranches ? "" : "active"}
            onClick={() => setShowBranches(false)}
          >
            Issues
          </ButtonWrapper>
        </Buttons>
        <Wrapper>
          {showBranches ? (
            branches.length > 0 ? (
              branches.map((branch) => {
                return <Branches commit={branch.commit} name={branch.name} />;
              })
            ) : (
              <h2 style={{ margin: "0", padding: "10px" }}>
                No Branches To Show
              </h2>
            )
          ) : issues.length > 0 ? (
            issues.map((issue) => {
              return (
                <Issues
                  title={issue.title}
                  author={issue.user.login}
                  avatar={issue.user.avatar_url}
                />
              );
            })
          ) : (
            <h2 style={{ margin: "0", padding: "10px" }}>No Issues To Show</h2>
          )}
        </Wrapper>
      </BodyWrapper>
    </>
  );
};

export default SingleRepoBody;

const BodyWrapper = styled.div`
  height: 100%;
  margin: 15px;
`;

const Buttons = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  border: 1px solid rgba(240, 246, 252, 0.1);
  .active {
    border-bottom: 3px solid #3fb950;
    padding: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border-right: 1px solid rgba(240, 246, 252, 0.1);
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);
  border-left: 1px solid rgba(240, 246, 252, 0.1);
  overflow: scroll;
`;
