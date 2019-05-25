import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeartFullIcon, MessageFullIcon } from "./Icons";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s linear;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  svg {
    fill: white;
  }
`;

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  color: white;
`;

const NumberList = styled.div`
  padding: 0 2px;
`;

const SquarePost = ({ likeCount, commentCount, files }) => {
  return (
    <Container bg={files.url}>
      <Overlay>
        <Number>
          <HeartFullIcon />
          <NumberList>{likeCount}</NumberList>
        </Number>
        <Number>
          <MessageFullIcon />
          <NumberList>{commentCount}</NumberList>
        </Number>
      </Overlay>
    </Container>
  );
};

SquarePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  files: PropTypes.object.isRequired
};

export default SquarePost;
