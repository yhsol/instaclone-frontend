import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
  min-height: 60vh;
`;

const Header = styled.header``;

const HeaderItems = styled.div``;

const UserTitle = styled.span`
  font-size: 19px;
`;

const Counts = styled.ul``;

const Count = styled.li``;

const Bio = styled.p``;

const ProfilePresenter = ({ data, loading }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
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
            <Avatar size={"lg"} url={avatar} />
          </HeaderItems>
          <HeaderItems>
            <UserTitle>{userName}</UserTitle>
          </HeaderItems>
          <Counts>
            <Count>
              <FatText text={String(postsCount)} /> posts
            </Count>
            <Count>
              <FatText text={String(followersCount)} /> followers
            </Count>
            <Count>
              <FatText text={String(followingCount)} /> following
            </Count>
          </Counts>
          <FatText text={fullName} />
          <Bio>{bio}</Bio>
        </Header>
      </>
    );
  }
};

export default ProfilePresenter;
