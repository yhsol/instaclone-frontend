import React, { useState } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  isLiked,
  likeCount,
  comment,
  createdAt
}) => {
  return <PostPresenter />;
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      userName: PropTypes.string.isRequired
    })
  ).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  comment: PropTypes,
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;
