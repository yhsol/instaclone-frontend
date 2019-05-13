import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Link, withRouter } from "react-router-dom";
import useInput from "../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";
import Input from "./Input";
import { InstaIcon, CompassIcon, HumanIcon, HeartIcon } from "./Icons";

const SHeader = styled.header`
  width: 100%;
  border: 0;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const SHeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const SHeaderList = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.backgroundColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const SHeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ME = gql`
  {
    me {
      userName
    }
  }
`;

const Header = ({ history }) => {
  const search = useInput("");
  const { data } = useQuery(ME);
  console.log(data.me);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <SHeader>
      <SHeaderWrapper>
        <SHeaderList>
          <Link to="/">
            <InstaIcon />
          </Link>
        </SHeaderList>
        <SHeaderList>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="Search"
            />
          </form>
        </SHeaderList>
        <SHeaderList>
          <SHeaderLink to="/explore">
            <CompassIcon />
          </SHeaderLink>
          <SHeaderLink to="/notifications">
            <HeartIcon />
          </SHeaderLink>
          <SHeaderLink to="/:userName">
            <HumanIcon />
          </SHeaderLink>
        </SHeaderList>
      </SHeaderWrapper>
    </SHeader>
  );
};

export default withRouter(Header);
