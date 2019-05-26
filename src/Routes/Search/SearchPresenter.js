import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import SquarePost from "../../Components/SquarePost";
import UserCard from "../../Components/UserCard";

const Wrapper = styled.div`
  height: 50vh;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem;
  grid-auto-rows: 10rem;
  grid-gap: 20px;
  margin-bottom: 50px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem;
  grid-auto-rows: 10rem;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  // console.log(data);
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text={"Search for something!"} />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text={"No User Found"} />
          ) : (
            data.searchUser.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                userName={user.userName}
                isFollowing={user.isFollowing}
                url={user.avatar}
                itsMe={user.itsMe}
              />
            ))
          )}
        </Section>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text={"No Post Found"} />
          ) : (
            data.searchPost.map(post => (
              <SquarePost
                key={post.id}
                files={post.files[0]}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;
