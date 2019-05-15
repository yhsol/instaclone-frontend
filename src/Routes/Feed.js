import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const FEED_QUERY = gql`
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
  opacity: 0.6;
  margin: 3rem auto;
`;

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);

  return (
    <Wrapper>{loading ? <Loader /> : <div>it's not loading!</div>}</Wrapper>
  );
};

export default Feed;
