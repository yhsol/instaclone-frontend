import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

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

  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Instaclone</title>
      </Helmet>
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
            caption={post.caption}
            location={post.location}
          />
        ))}
    </Wrapper>
  );
};

export default Feed;
