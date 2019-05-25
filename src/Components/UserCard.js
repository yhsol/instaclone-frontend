import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div`
  ${props => props.theme.whiteBox};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// const SAvatar = styled(Avatar)`
//   margin-bottom: 12px;
// `;

const SLink = styled(Link)`
  color: inherit;
`;

const CardItem = styled.div`
  margin-bottom: 12px;
`;

const UserCard = ({ userName, isFollowing, url, itsMe }) => {
  return (
    <Card>
      <CardItem>
        <SLink to={`/${userName}`}>
          <Avatar url={url} size={"md"} />
        </SLink>
      </CardItem>
      <CardItem>
        <SLink to={`/${userName}`}>
          <FatText text={userName} />
        </SLink>
      </CardItem>
      {!itsMe && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
    </Card>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  itsMe: PropTypes.bool
};

export default UserCard;
