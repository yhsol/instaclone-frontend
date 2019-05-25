import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
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

const PostSection = styled.div``;

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
            data.searchPost.map(post => <UserCard />)
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
