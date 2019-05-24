import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div``;

const UserCard = ({ userName, isFollowing, url, itsMe }) => {
  return (
    <Card>
      <Avatar url={url} />
      <FatText text={userName} />
      {!itsMe && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
    </Card>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  itsMe: PropTypes.bool.isRequired
};

export default UserCard;
