import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  bottom: 0;
  position: fixed;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.div`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">ABOUT US</Link>
      </ListItem>
      <ListItem>
        <Link href="#">SUPPORT</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRESS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">JOBS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRIVACY</Link>
      </ListItem>
      <ListItem>
        <Link href="#">TERMS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">DIRECTORY</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PROFILES</Link>
      </ListItem>
      <ListItem>
        <Link href="#">HASHTAGS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">LANGUAGE</Link>
      </ListItem>
      <Copyright>&copy; {new Date().getFullYear()} INSTACLONE</Copyright>
    </List>
  </Footer>
);
