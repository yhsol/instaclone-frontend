import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import Button from "../../Components/Button";
import SquarePost from "../../Components/SquarePost";
import FollowButton from "../../Components/FollowButton";

const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 60vh;
  width: 80%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0px 0px 20px;
  border-bottom: 1px solid ${props => props.theme.greyColor};
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderItems = styled.div``;

const HeaderItemsRows = styled.div`
  display: flex;
  align-items: center;
`;

const UserTitle = styled.span`
  margin-right: 14px;
  font-size: 19px;
  display: block;
`;

const UserButtonList = styled.div`
  display: flex;
`;

const UserButton = styled.div`
  margin-right: 10px;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 14px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const ProfilePresenter = ({ data, loading, logOut }) => {
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
        post,
        id
      }
    } = data;
    return (
      <Wrapper>
        <Header>
          <HeaderItems>
            <Avatar size={"lg"} url={avatar} />
          </HeaderItems>
          <HeaderTitle>
            <HeaderItems>
              <HeaderItemsRows>
                <UserTitle>{userName}</UserTitle>
                {"  "}
                {itsMe ? (
                  <UserButtonList>
                    <UserButton>
                      <Button onClick={logOut} text="Edit Profile" />
                    </UserButton>
                    <UserButton>
                      <Button onClick={logOut} text="Log Out" />
                    </UserButton>
                  </UserButtonList>
                ) : (
                  <FollowButton isFollowing={isFollowing} id={id} />
                )}
              </HeaderItemsRows>
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
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderTitle>
        </Header>
        <Posts>
          {post &&
            post.map(postItem => (
              <SquarePost
                key={postItem.id}
                likeCount={postItem.likeCount}
                commentCount={postItem.commentCount}
                files={postItem.files[0]}
              />
            ))}
        </Posts>
      </Wrapper>
    );
  }
  return null;
};

export default ProfilePresenter;
