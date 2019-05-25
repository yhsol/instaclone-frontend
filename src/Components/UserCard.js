import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton";

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

const UserCard = ({ id, userName, isFollowing, url, itsMe }) => {
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
      {!itsMe && <FollowButton id={id} isFollowing={isFollowing} />}
    </Card>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  itsMe: PropTypes.bool.isRequired
};

export default UserCard;
