import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";

const GET_USER = gql`
  query seeUser($userName: String!) {
    seeUser(userName: $userName) {
      id
      avatar
      userName
      fullName
      isFollowing
      itsMe
      bio
      followingCount
      followersCount
      postsCount
      post {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 60vh;
`;

const Header = styled.header``;

const HeaderItems = styled.div``;

const Profile = ({
  match: {
    params: { userName }
  }
}) => {
  const { data, loading } = useQuery(GET_USER, { variables: { userName } });
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    console.log(data);
    const {
      seeUser: {
        avatar,
        userName,
        fullName,
        isFollowing,
        itsMe,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts
      }
    } = data;
    return (
      <>
        <Header>
          <HeaderItems>
            <Avatar size="lg" url={avatar} />
          </HeaderItems>
        </Header>
      </>
    );
  }
};

export default withRouter(Profile);
