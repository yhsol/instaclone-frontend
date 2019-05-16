import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import PostContainer from "../Components/Post";
import Post from "./Post";

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
  min-height: 80vh;
`;

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            files={post.files}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            comment={post.comment}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};

export default Feed;
