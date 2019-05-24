import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";

const Wrapper = styled.div``;

const SearchPresenter = ({ searchTerm, loading }) => {
  return (
    <Wrapper>
      {searchTerm === undefined && <FatText text={"Search for something!"} />}
    </Wrapper>
  );
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string
};

export default SearchPresenter;
