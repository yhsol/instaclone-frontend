import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../Hooks/useInput";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQuery";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  files,
  isLiked,
  likeCount,
  comment,
  createdAt,
  location,
  caption
}) => {
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [likeCountS, setLikeCountS] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const commentS = useInput("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: commentS.value }
  });
  const slideFn = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slideFn();
  }, [currentItem]);

  const toggleLike = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLikedS(false);
      setLikeCountS(likeCountS - 1);
    } else {
      setIsLikedS(true);
      setLikeCountS(likeCountS + 1);
    }
  };

  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        // console.log(addComment);
        setSelfComments([...selfComments, addComment]);
        commentS.setValue("");
      } catch {
        toast.error("Can't add Comment!");
      }
    }
    return;
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      isLiked={isLikedS}
      likeCount={likeCountS}
      comment={comment}
      createdAt={createdAt}
      newComment={commentS}
      setIsLikedS={setIsLikedS}
      setLikeCountS={setLikeCountS}
      location={location}
      caption={caption}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;
