import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFullIcon, HeartIcon, MessageIcon } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  max-width: 500px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.img`
  max-width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin: 10px 0px;
`;

const TimeStamp = styled.span`
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.liteGreyColor};
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
`;

const TextArea = styled(TextareaAutosize)`
  border: none;
  font-weight: 500;
  width: 100%;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const PostPresenter = ({
  user: { userName, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment
}) => {
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserSection>
          <FatText text={userName} />
          <Location>{location}</Location>
        </UserSection>
      </Header>
      <Files>
        {files &&
          files.map(file => <File key={file.id} id={file.id} src={file.url} />)}
      </Files>
      <Meta>
        <Buttons>
          <Button>{isLiked ? <HeartFullIcon /> : <HeartIcon />}</Button>
          <Button>
            <MessageIcon />
          </Button>
        </Buttons>
        <FatText text={likeCount === 1 ? "1 like" : `${likeCount} like`} />
        <TimeStamp>{createdAt}</TimeStamp>
        <TextArea
          placeholder={"Add a comment..."}
          {...newComment}
          onResize={e => {}}
        />
      </Meta>
    </Post>
  );
};

export default PostPresenter;
