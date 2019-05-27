import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import { withRouter } from "react-router-dom";
import SquarePost from "../Components/SquarePost";

const EXPLORE_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        userName
      }
      files {
        id
        url
      }
      isLiked
      likeCount
      commentCount
      comment {
        id
        text
        user {
          id
          userName
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Explore = props => {
  console.log(props);
  const { data, loading } = useQuery(EXPLORE_QUERY);

  return (
    <Wrapper>
      <Helmet>
        <title>Explore | Instaclone</title>
      </Helmet>
      {loading && <Loader />}
      <Posts>
        {!loading &&
          data &&
          data.seeFeed &&
          data.seeFeed.map(post => (
            <SquarePost
              key={post.id}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              files={post.files[0]}
            />
          ))}
      </Posts>
    </Wrapper>
  );
};

export default withRouter(Explore);
